import React, { Component } from 'react';

export const themes = {
    light: {
        background: '#222222',
        color: '#ffffff',
    },
    dark: {
        background: '#eeeeee',
        color: '#000000',
    },
};

export const ThemeContext = React.createContext(
    themes.light
);

function ThemedButton(props) {
    return (
        <ThemeContext.Consumer>
            {theme => <button {...props} style={{
                backgroundColor: theme.background,
                color: theme.color
            }} />}
        </ThemeContext.Consumer>
    );
}

function Toolbar(props) {
    return (
        <ThemedButton onClick={props.changeTheme}>
            Change Theme
        </ThemedButton>
    );
}

class S38 extends Component{
    constructor(props) {
        super(props);
        this.state = {
            theme: themes.light,
        };

        this.toggleTheme = () => {
            const { light, dark } = themes;

            this.setState(state => ({
                theme: state.theme === dark ? light : dark
            }));
        };
    }

    render() {
        return (
            <div className={"inner"}>
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.toggleTheme} />
                </ThemeContext.Provider>
            </div>
        )
    }
}

export default S38;