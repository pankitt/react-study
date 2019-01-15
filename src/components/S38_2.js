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

export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => {},
});

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

function Content() {
    return (
        <div>
            <ThemeTogglerButton />
        </div>
    );
}

class S38_2 extends Component{
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
            toggleTheme: this.toggleTheme
        };
    }

    render() {
        return (
            <div className={"inner"}>
                <ThemeContext.Provider value={this.state}>
                    <Content />
                </ThemeContext.Provider>
            </div>
        )
    }
}

export default S38_2;