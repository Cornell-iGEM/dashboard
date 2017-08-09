import React from 'react';

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
                    <h1>{profile.name}</h1>
                    <div>
                        <h3>{profile.nickname}</h3>
                    </div>
                    <pre>{JSON.stringify(profile, null, 2)}</pre>
                </div>

            );
        }
        else{
            return null;
        }
    }
}
