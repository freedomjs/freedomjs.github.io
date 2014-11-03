var ROTATION = 15 * 1000;
var startPosition = 0;

window.addEventListener('load', function() {
  window.setInterval(rotate, ROTATION);
  rotate();
}, true);

function rotate() {
  var element = displays[startPosition];
  if (typeof element === 'string') {
    document.getElementById('body').innerHTML = element;
    document.getElementById('subtitle').innerHTML = '';
  } else if (typeof element === 'object') { //array
    document.getElementById('body').innerHTML = element[0];
    document.getElementById('subtitle').innerHTML = element[1];
  } else {
    document.getElementById('body').innerHTML = '';
    document.getElementById('subtitle').innerHTML = '';
    element(document.getElementById('body'),
           document.getElementById('subtitle'));
  }
  startPosition = (startPosition + 1) % displays.length;
}

function makeImage(url, title) {
  var img = '<div style="width:100%;height:100%;background-image: url(\'' + url + '\');background-repeat:no-repeat;background-size:contain"></div>';
  if (title) {
    return [img, "<header><span class='triangle'>&#9654;</span> " + title + "</header>"];
  }
  return img;
}

function codeClimate(repo, title) {
  return function(b, t) {
    var gpaURL = "http://cors.corsproxy.io/?url=https://codeclimate.com/repos/" + repo +"/gpa.json";
    var fetcher = new XMLHttpRequest();
    fetcher.open('get', gpaURL, true);
    fetcher.responseType = 'json';
    fetcher.onreadystatechange = function() {
      if (this.readyState === 4) {
        var data = fetcher.response.data[0].values;
        renderGPA(data, b);
      }
    }
    fetcher.send();
    if (title) {
      t.innerHTML = "<header><span class='triangle'>&#9654;</span> " + title + "</header>";
    } else {
      t.innerHTML = "<header><span class='triangle'>&#9654;</span> Code Climate</header>";
    }
  }
}

function renderGPA(data, root) {
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  var paddingLeft = 5; // space to the left of the bars

  var x = d3.scale.linear()
    .domain([d3.min(data, function (d) {return d.x;}),
             d3.max(data, function (d) {return d.x;})])
    .range([50, windowWidth - 50]);
  var y = d3.scale.linear()
    .domain([0, 4])
    .range([450, 50]);
  var c = d3.scale.linear()
    .domain([0, 2, 3, 4])
    .range(["#ee0000","#ee0000","#ffee00","#00aa00"])
    .interpolate(d3.interpolateHcl);

  var chart = d3.select(root).append("svg")
    .attr('width', window.innerWidth).attr('height', 500).attr('style','width:100%;height:100%;');

    var lineFunction = d3.svg.line()
      .x(function(d) { return x(d.x); })
      .y(function(d) { return y(d.y); })
      .interpolate("linear");
    var lineGraph = chart.append("path")
    .attr("d", lineFunction(data))
    .attr("stroke", "gray")
    .attr("stroke-width", 4)
    .attr("fill", "none");

    var cContainer = chart.append('g')
      .attr('transform', 'translate(' + paddingLeft + ', 0)'); 

    cContainer.selectAll("circle").data(data).enter().append("circle")
      .attr("cx", function (d) { return x(d.x);})
      .attr("cy", function (d) { return y(d.y);})
      .attr("r", 30)
      .style("fill", function(d) {return c(d.y)});

    var gridContainer = chart.append('g')
      .attr('transform', 'translate(' + paddingLeft + ', 0)'); 

  gridContainer.selectAll("text").data(data).enter().append("text")
    .attr("x", function (d) { return x(d.x);})
    .attr("y", function (d) { return y(d.y);})
    .attr("text-anchor", "middle")
    .text(function(d) {
      return String(d.y);
    });
}

function renderBuildTimes(data, root) {
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  var paddingLeft = 5; // space to the left of the bars
  var paddingRight = 10; // space to the right of the bars
  var barWidth = windowWidth / data.length - 30; // height of one bar
  var barPaddingH = 50; // vertical padding between bars
  var gridLabelHeight = windowHeight - 150; // space reserved for gridline labels
  var gridChartOffset = 3; // space between start of grid and first bar
  var maxBarHeight = gridLabelHeight - 30; // height of the bar with the max value
  
  // scales
  var xScale = d3.scale.linear()
  	.domain([0, data.length])
  	.range([windowWidth - 50, 0]);
  var y = d3.scale.linear()
  	.domain([0, d3.max(data, function (d) {return d.duration/60;})])
  	.range([0, maxBarHeight]);

  // svg container element
  var chart = d3.select(root).append("svg")
    .attr('width', window.innerWidth).attr('height', 500).attr('style','width:100%;height:100%;');

  // grid line labels
  var gridContainer = chart.append('g')
  	.attr('transform', 'translate(' + paddingLeft + ',' + gridLabelHeight + ')'); 
  gridContainer.selectAll("text").data(data).enter().append("text")
  	.attr("x", function (d, i) {
      return xScale(i) - (barWidth / 2);
    })
  	.attr("dy", -3)
  	.attr("text-anchor", "middle")
  	.text(function(d,i) {
      return String(i);
    });

  // bars
  var barsContainer = chart.append('g')
  	.attr('transform', 'translate(' + paddingLeft + ',' + ( gridLabelHeight - 20 ) + ')'); 
  barsContainer.selectAll("rect").data(data).enter().append("rect")
  	.attr('y', function(d) { return -1 * y(d.duration / 60); })
  	.attr("x", function (d, i) {
      return xScale(i) - barWidth;
    })
  	.attr('width', barWidth - 10)
  	.attr('height', function(d) { return y(d.duration / 60); })
  	.attr('stroke', 'white')
  	.attr('fill', function(d) {
  		return d.result === 0 ? '#038035' : '#CC0000';
  	}).each(function (d, i) {
      d.index = i;
      var sel = d3.select(this.parentNode);
      lookupCommit(d.commit, function(sel, d, info) {
        sel.append('svg:image')
          .attr('width', barWidth - 10)
          .attr('height', barWidth - 10)
          .attr('y', -1* y(d.duration / 60))
          .attr('x', xScale(d.index) - barWidth)
          .attr('xlink:href', info.data.author.avatar_url)
        sel.append('text')
          .attr('y', 0)
          .attr('x', xScale(d.index))
          .attr('style', 'writing-mode: tb; glyph-orientation-vertical: 90;')
          .attr("text-anchor", "end")
          .text(info.data.commit.message)
      }.bind({}, sel, d));
    });
}


var knownCommits = {};
function loadCommit(data) {
  var s = data.data.sha;
  knownCommits[s].forEach(function (f) {f(data);});
  knownCommits[s] = data;
};
function lookupCommit(sha, cb) {
  if (knownCommits[sha]) {
    if (knownCommits[sha].meta) {
      cb(knownCommits[sha]);
    } else {
      knownCommits[sha].push(cb);
    }
  } else {
    knownCommits[sha] = [cb];
    var scr = document.createElement('script');
    scr.src = 'https://api.github.com/repos/freedomjs/freedom/commits/' + sha + '?callback=loadCommit';
    document.body.appendChild(scr);
    // For debugging, due to github imposed ratelimit.
    /*
    loadCommit({
      meta: true,
      data: {
        sha: sha,
        author: {
          avatar_url: "https://avatars.githubusercontent.com/u/566890?v=2"
        },
        message: "small updates to README"
      }
    });
    */
  }
}

function travisStats(body, title) {
  title.innerHTML = "<header><span class='triangle'>&#9654;</span> Build Status</header>";
  var buildsURL = 'https://api.travis-ci.org/repos/freedomjs/freedom/builds?event_type=push';

  var oldest = Infinity;
  var filter = function (builds) {
    if (typeof builds.length === 'undefined') {
      return;
    }
    var interesting = [];
    builds.forEach(function(build) {
      if (Number(build.number) < oldest) {
        oldest = Number(build.number);
      }
      if (build.branch === 'master' && build.state === 'finished') {
        interesting.push(build);
      }
    });
    renderBuildTimes(interesting, body);
  };
  d3.json(buildsURL, filter);
}