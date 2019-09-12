"use strict";

class News extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          {this.props.news.map((
            newsItem /* <li>
                                          { JSON.stringify(newsItem) }
                                      </li> */
          ) => (
            <div class="col-md-6 frame">
              <div class="mb-3">
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe
                    class="embed-responsive-item"
                    src={`https://www.youtube.com/embed/${newsItem.id.videoId}`}
                    frameborder="0"
                    allowfullscreen
                  />
                </div>
                <div class="card-body">
                  <h4 class="card-title text-center">
                    {newsItem.snippet.title}
                  </h4>
                  <p class="card-text">
                    Raising a matter of of Urgent Public importance Pursuant to
                    Order VIII Rule 46
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
// https://newsapi.org/v1/articles?source=recode&sortBy=top&apiKey=9d9cdb99164548188e571f363cca8553

class NewsContainer extends React.Component {
  url =
    "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCw7QvS48B4FFcznCMAqTu6A&order=date&type=video&videoSyndicated=true&key=AIzaSyDKfP0IHjyzZC2tO9jEm1MRFO_LKgtMWDg";
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      isLoading: true
    };
  }
  componentDidMount() {
    var self = this;
    //console.log('this.url=', this.url);
    fetch(this.url)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        //console.log('parsed json', json)
        if (json.pageInfo.totalResults > 0) {
          self.setState({
            news: json.items,
            isLoading: false
          });
        } else {
          alert("There are no available videos");
        }
      })
      .catch(function(ex) {
        console.log("Parsing failed", ex);
      });
  }

  render() {
    const isLoading = this.state.isLoading;
    let button;

    if (isLoading) {
      button = <div>Loading...</div>;
    } else {
      button = <News news={this.state.news} />;
    }

    return (
      <div>
        {/* <h1>NewsContainer</h1> */}
        {button}
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="">
        <h1 className="h1_video">Our Videos</h1>
        <NewsContainer />
      </div>
    );
  }
}

let domContainer = document.querySelector("#like_button_container");
ReactDOM.render(<App />, domContainer);
