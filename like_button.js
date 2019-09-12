"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var News = function (_React$Component) {
  _inherits(News, _React$Component);

  function News() {
    _classCallCheck(this, News);

    return _possibleConstructorReturn(this, (News.__proto__ || Object.getPrototypeOf(News)).apply(this, arguments));
  }

  _createClass(News, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { "class": "container" },
        React.createElement(
          "div",
          { "class": "row" },
          this.props.news.map(function (newsItem /* <li>
                                                                      { JSON.stringify(newsItem) }
                                                                  </li> */
          ) {
            return React.createElement(
              "div",
              { "class": "col-md-6 frame" },
              React.createElement(
                "div",
                { "class": "mb-3" },
                React.createElement(
                  "div",
                  { "class": "embed-responsive embed-responsive-16by9" },
                  React.createElement("iframe", {
                    "class": "embed-responsive-item",
                    src: "https://www.youtube.com/embed/" + newsItem.id.videoId,
                    frameborder: "0",
                    allowfullscreen: true
                  })
                ),
                React.createElement(
                  "div",
                  { "class": "card-body" },
                  React.createElement(
                    "h4",
                    { "class": "card-title text-center" },
                    newsItem.snippet.title
                  ),
                  React.createElement(
                    "p",
                    { "class": "card-text" },
                    "Raising a matter of of Urgent Public importance Pursuant to Order VIII Rule 46"
                  )
                )
              )
            );
          })
        )
      );
    }
  }]);

  return News;
}(React.Component);
// https://newsapi.org/v1/articles?source=recode&sortBy=top&apiKey=9d9cdb99164548188e571f363cca8553

var NewsContainer = function (_React$Component2) {
  _inherits(NewsContainer, _React$Component2);

  function NewsContainer(props) {
    _classCallCheck(this, NewsContainer);

    var _this2 = _possibleConstructorReturn(this, (NewsContainer.__proto__ || Object.getPrototypeOf(NewsContainer)).call(this, props));

    _this2.url = "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCw7QvS48B4FFcznCMAqTu6A&order=date&type=video&videoSyndicated=true&key=AIzaSyDKfP0IHjyzZC2tO9jEm1MRFO_LKgtMWDg";

    _this2.state = {
      news: [],
      isLoading: true
    };
    return _this2;
  }

  _createClass(NewsContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var self = this;
      //console.log('this.url=', this.url);
      fetch(this.url).then(function (response) {
        return response.json();
      }).then(function (json) {
        //console.log('parsed json', json)
        if (json.pageInfo.totalResults > 0) {
          self.setState({
            news: json.items,
            isLoading: false
          });
        } else {
          alert("There are no available videos");
        }
      }).catch(function (ex) {
        console.log("Parsing failed", ex);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var isLoading = this.state.isLoading;
      var button = void 0;

      if (isLoading) {
        button = React.createElement(
          "div",
          null,
          "Loading..."
        );
      } else {
        button = React.createElement(News, { news: this.state.news });
      }

      return React.createElement(
        "div",
        null,
        button
      );
    }
  }]);

  return NewsContainer;
}(React.Component);

var App = function (_React$Component3) {
  _inherits(App, _React$Component3);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "" },
        React.createElement(
          "h1",
          { className: "h1_video" },
          "Our Videos"
        ),
        React.createElement(NewsContainer, null)
      );
    }
  }]);

  return App;
}(React.Component);

var domContainer = document.querySelector("#like_button_container");
ReactDOM.render(React.createElement(App, null), domContainer);