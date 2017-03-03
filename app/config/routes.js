var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var HomeContainer = require('../containers/HomeContainer');
var EducationExperienceContainer = require('../containers/EducationExperienceContainer');
var ProjectsContainer = require('../containers/ProjectsContainer');

var routes = (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={HomeContainer} />
			<Route path='EducationExperience' component={EducationExperienceContainer}/>
			<Route path='Projects' component={ProjectsContainer}/>
		</Route>
	</Router>
);

module.exports = routes;
