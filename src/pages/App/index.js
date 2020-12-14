import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Introduction from '../Introduction';
import Blog from '../Blog';
import Topic from '../Topic';
import Crawler from '../Crawler';
import Bots from '../Bots';
import Admin from '../Admin';
import Exception from '../Exception';

const App = () => {
  return (
    <div>
      <Helmet defaultTitle="HÔM NAY ĐỌC GÌ? | Cá nhân hóa thông tin người dùng cần đọc">
        <meta
          name="description"
          content="Tổng hợp bài viết hay trên facebook. Nội dung đa dạng, chuyên sâu."
        />
        <meta
          name="keywords"
          content="hôm nay đọc gì, homnaydocgi, hom nay doc gi, bài viết facebook hay, blog của tài bùi, đọc gì, doc gi hay"
        />
      </Helmet>
      <Router>
        <Switch>
          <Route exact path="/" component={Introduction} />
          <Route exact path="/home" component={Blog} />
          <Route path="/home/topic" component={Topic} />
          <Route path="/home/crawler" component={Crawler} />
          <Route path="/home/bots" component={Bots} />
          <Route path="/exception" component={Exception} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
