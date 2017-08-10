import React from 'react';
import Img from 'react-image';

export default class Profile extends React.Component {
    componentWillMount() {
        this.setState({ profile: {} });
        const { userProfile, getProfile } = this.props.auth;
        if (!userProfile) {
            console.log(this.props.auth);
            this.props.auth.getProfile((err, profile) => {
                this.setState({ profile });
            });
        } else {
            this.setState({ profile: userProfile });
        }
    }
    render() {
        const { profile } = this.state;
        console.log("profile:", profile);
        if(profile) {
            return (
                <div className="profile-area">
                    <h1 className="profile-name">Hi, {profile.given_name}!
                    <img width="100px" height="100px" className="img-circle pull-right" src={profile.picture}/>
                    </h1>
                </div>

            );
        }
        else{
            return null;
        }
    }
}
