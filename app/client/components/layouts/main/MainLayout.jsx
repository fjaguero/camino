Camino.MainLayout = React.createClass({
    render() {
        return (
          <span>
            <head>
              <title>Camino</title>
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            <body>
              <div classNam="container">
                {this.props.header}

                {this.props.content}

                {this.props.footer}
              </div>
            </body>
          </span>
        )
    }
});
