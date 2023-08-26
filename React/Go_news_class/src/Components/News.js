import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaultProp = {
    country: "in",
    pgsize: 9,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pgsize: PropTypes.number,
    category: PropTypes.string,
  };

  capital=(x)=>{
    return x.charAt(0).toUpperCase()+x.slice(1)
  }

  constructor(props) {
    super(props);

    this.state = {
      news: [],
      loading: false,
      page: 1,
    };
    document.title =`${this.capital(this.props.category)} - Get Your daily dose of morning News On one touch with GO-News`
  }

  async updateNews() {
    const apiurl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page}&pageSize=${this.props.pgsize}`;
    this.setState({ loading: true });
    let data = await fetch(apiurl);
    let parsedData = await data.json();
    this.setState({
      news: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  prev = async () => {
    await this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };
  next = async () => {
    await this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  render() {
    return (
      <div className="container">
        <h3 className="mt-5 mb-3 p-2 bg-primary text-white text-center">
          GO-NEWS Top {this.capital(this.props.category)} Headlines.....
        </h3>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.news.map((item) => {
              return (
                <div className="col-12 col-md-4 my-3 " key={item.url}>
                  <NewsItem
                    title={item.title}
                    description={
                      item.description
                        ? item.description.slice(0, 95)
                        : "Go to Read More"
                    }
                    imgUrl={
                      item.urlToImage
                        ? item.urlToImage
                        : "https://www.dominiqueanselny.com/wp-content/themes/da-ny/img/menu/news.png"
                    }
                    url={item.url}
                    author={item.author ? item.author : "unknown"}
                    date={item.publishedAt}
                    source={item.source.name}
                  />
                </div>
              );
            })}
        </div>
        {/* .......Buttons...... */}
        <div className="container d-flex justify-content-center p-2 my-2">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-success me-3"
            onClick={this.prev}
          >
            {" "}
            &larr; "Prev"
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pgsize)
            }
            type="button"
            className="btn btn-success"
            onClick={this.next}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}



