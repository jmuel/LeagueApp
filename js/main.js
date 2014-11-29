var React = require('react'),
    App = require('./components/app')
    mui = require('material-ui'),
    AppCanvas = mui.AppCanvas,
    AppBar = mui.AppBar,
    Menu = mui.Menu;

React.render(
    <AppCanvas predefinedLayout={1}>
        <AppBar
            className="mui-dark-theme"
            title="Awesome League App"
            zDepth={0}
        />

        <div className="mui-app-content-canvas">
            <App />
        </div>
    </AppCanvas>
    ,
    document.body
);