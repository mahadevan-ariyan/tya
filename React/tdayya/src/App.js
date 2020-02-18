import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import signin from './components/signin/signin.js';
import  history  from './history';
import Dashboard from './components/dashboard';
import collection from './components/collection';
import Artist from './components/artist';
import Header from './components/header/header.js';
import sidebar from './components/sidebar/sidebar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import Footer from './components/footer/footer.js';

// const Loading = () => <div>Loading...</div>;

// const signin = Loadable({
//     loader: () => import('./components/signin/signin'),
//     loading: Loading,
//   });

// const CameraList = Loadable({
//     loader: () => import('./components/camera-list'),
//     loading: Loading,
//   });

// const CameraPhotos = Loadable({
//     loader: () => import('./components/camera-photos'),
//     loading: Loading,
//   });

// const photoCarousel = Loadable({
//     loader: () => import('./components/photo-carousel'),
//     loading: Loading,
//   });


export default class Routes extends React.Component {

    render() {
        return (
            <Router history={history} >
                    <Header history={history} />
                    <Switch>
                    <Route path='/signin' component={signin}/>
                    <Route path='/dashboard' component={Dashboard}/>
                    <Route path='/collection' component={collection}/>
                    <Route path='/artist' component={Artist}/>
                    <Route path='/sidebar' component={sidebar}/>
                    <Route path='*' component={signin}/>
                    </Switch>
                 
                    <Footer />

            </Router>

        )
    }
}


// export default App;
