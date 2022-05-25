import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../actions/auth";
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component {
    handleLogout = () => {
        const { dispatch } = this.props;
        dispatch(logoutUser());
    };
    render() {
        const { isLoggingOut, logoutError } = this.props; return (
            <div>
                <h1 align="center">Selamat datang di perkuliahan pada mata kuliah Pemrograman Berbasis Framework   </h1>
                <div class="px-2 bg-light "><marquee class="py-3" direction="left" onmouseover="this.stop()" onmouseout="this.start()" behavior="alternate" scrollamount="20">
                    <h1>Halo nama saya Dimas Ilham Rivaldy
                    </h1></marquee>
                </div>
                <div class="px-2 bg-light "><marquee class="py-3" direction="right" onmouseover="this.stop()" onmouseout="this.start()" behavior="alternate" scrollamount="20">
                    <h1>Saya mahasiswa Politeknik Negeri Malang
                    </h1></marquee>
                </div>
                <div class="px-2 bg-light "><marquee class="py-3" direction="left" onmouseover="this.stop()" onmouseout="this.start()" behavior="alternate" scrollamount="20">
                    <h1>Lahir di kota Malang Jawa Timur
                    </h1></marquee>
                </div>
                <div class="px-2 bg-light "><marquee class="py-3" direction="right" onmouseover="this.stop()" onmouseout="this.start()" behavior="alternate" scrollamount="20">
                    <h1>Tinggal di kota Pasuruan
                    </h1></marquee>
                </div>
                <button onClick={this.handleLogout} align="center">Logout</button>
                {isLoggingOut && <p>Logging Out....</p>}
                {logoutError && <p>Error logging out</p>}
            </div>
        );
    }
} function mapStateToProps(state) {
    return {
        isLoggingOut: state.auth.isLoggingOut,
        logoutError: state.auth.logoutError
    };
} 
export default connect(mapStateToProps)(Home);