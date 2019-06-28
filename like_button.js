var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

ReactModal.setAppElement("#main");

var ExampleApp = function (_React$Component) {
  _inherits(ExampleApp, _React$Component);

  function ExampleApp() {
    _classCallCheck(this, ExampleApp);

    var _this = _possibleConstructorReturn(this, (ExampleApp.__proto__ || Object.getPrototypeOf(ExampleApp)).call(this));

    _this.state = {
      showModal: false
    };

    _this.handleOpenModal = _this.handleOpenModal.bind(_this);
    _this.handleCloseModal = _this.handleCloseModal.bind(_this);
    return _this;
  }

  _createClass(ExampleApp, [{
    key: "handleOpenModal",
    value: function handleOpenModal() {
      this.setState({ showModal: true });
    }
  }, {
    key: "handleCloseModal",
    value: function handleCloseModal() {
      this.setState({ showModal: false });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          { onClick: this.handleOpenModal },
          "Trigger Modal"
        ),
        React.createElement(
          ReactModal,
          {
            isOpen: this.state.showModal,
            contentLabel: "onRequestClose Example",
            onRequestClose: this.handleCloseModal,
            className: "Modal",
            overlayClassName: "Overlay"
          },
          React.createElement(
            "p",
            null,
            "Modal text!"
          ),
          React.createElement(
            "button",
            { onClick: this.handleCloseModal },
            "Close Modal"
          )
        )
      );
    }
  }]);

  return ExampleApp;
}(React.Component);

var props = {};

ReactDOM.render(React.createElement(ExampleApp, props), document.getElementById("main"));