import React, { Component } from 'react';

const themes = {
    light: {
        background: '#222222',
        color: '#ffffff',
    },
    dark: {
        background: '#eeeeee',
        color: '#000000',
    },
};

const users = {
    name: 'Guest',
};

export const ThemeContext = React.createContext(themes.light);
const UserContext = React.createContext(users.name);

function ThemeTogglerButton() {
    return (
        <ThemeContext.Consumer>
            {({theme, toggleTheme}) => (
                <button
                    onClick={toggleTheme}
                    style={{backgroundColor: theme.background, color: theme.color}}>
                    Toggle Theme
                </button>
            )}
        </ThemeContext.Consumer>
    );
}

function UserContent() {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <UserContext.Consumer>
                    {user => (
                        <div theme={theme} >
                            User: {user}
                        </div>
                    )}
                </UserContext.Consumer>
            )}
        </ThemeContext.Consumer>
    );
}

function Layout() {
    return (
        <div>
            <ThemeTogglerButton />
            <UserContent />
        </div>
    );
}

class S38_3 extends Component{
    constructor(props) {
        super(props);

        this.toggleTheme = () => {
            this.setState(state => ({
                theme:
                    state.theme === themes.dark
                        ? themes.light
                        : themes.dark,
            }));
        };

        this.state = {
            theme: themes.light,
            toggleTheme: this.toggleTheme,
        };
    }

    render() {

        return (
            <div className={"inner"}>
                <ThemeContext.Provider value={this.state}>
                    <UserContext.Provider value={users.name}>
                        <Layout />
                    </UserContext.Provider>
                </ThemeContext.Provider>
            </div>
        )
    }
}

export default S38_3;