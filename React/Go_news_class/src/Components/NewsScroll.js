import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class NewsScroll extends Component {
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

  capital = (x) => {
    return x.charAt(0).toUpperCase() + x.slice(1);
  };

  constructor(props) {
    super(props);

    this.state = {
      news: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capital(
      this.props.category
    )} - Get Your daily dose of morning News On one touch with GO-News`;
  }

  updateNews=async()=>{
    this.props.setProgress(10);
    const apiurl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page}&pageSize=${this.props.pgsize}`;
    let data = await fetch(apiurl);
    this.props.setProgress(50);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      news: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
    this.props.setProgress(100);
  }

  componentDidMount=async()=> {
    this.updateNews();
  }
  fetchData=async()=>{
    
    const apiurl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page+1}&pageSize=${this.props.pgsize}`;
    this.setState({ page: this.state.page + 1 });
    let data = await fetch(apiurl);
    let parsedData = await data.json();
    this.setState({
      news: this.state.news.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  }

  render() {
    return (
      <>
        <h3 className="mb-3 p-2 text-primary text-center" style={{marginTop:'80px'}}>
          GO-NEWS Top {this.capital(this.props.category)} Headlines.....
        </h3>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.news.length}
          next={this.fetchData}
          hasMore={this.state.news.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.news.map((item) => {
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
          </div>
        </InfiniteScroll>
      </>
    );
  }
}


