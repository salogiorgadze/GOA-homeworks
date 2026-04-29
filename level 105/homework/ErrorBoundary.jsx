class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error:null,errorInfo:null };
  }

  componentDidCatch(error,errorInfo){
    this.setState({
        error,
        errorInfo
    })
  }
  handleClick = () => {
    this.setState({
        error:null,
        errorInfo:null
    })
  }
  render() {
    if(this.state.errorInfo){
        return(
            <div>
                <h2>An error</h2>
                <details>
                    {this.state.error && this.state.error.toString()}
                    <br />
                    {this.state.errorInfo.componentStack}
                </details>
            </div>
        )
    }
  }
}
export default ErrorBoundary