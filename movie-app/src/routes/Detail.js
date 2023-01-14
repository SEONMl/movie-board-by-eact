import React from "react";

class Detail extends React.Component{
    
    componentDidMount() {
        const { location,history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }

    render() {
        console.log(this.props);

        const { location } = this.props;
        if (location.state) {
            return (
                <div className="detail__container">
                    <h1>🎞 Movie details</h1>
                    <span>{location.state.title}</span>
                    <span>{location.state.summary}</span>
                </div>
            );
        }
        else {
            return null;
        }
    }
}

export default Detail;