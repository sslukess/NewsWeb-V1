import theme from './theme';

const ThemeSheet = () => {

    const cssToInsert = `
        :root {
            --primary-color: ${theme.colors.primary};
            --secondary-color: ${theme.colors.secondary};
            --app-background-color: ${theme.colors.appBackground};
            --text-color: ${theme.text.colors.primary};
            --text-color-light: ${theme.text.colors.light};
            --text-color-logo: ${theme.text.colors.logo};
            --text-color-link: ${theme.text.colors.linkColor};
            --text-color-link-hover: ${theme.text.colors.linkHover};
            
            --text-family-logo: ${theme.text.family.logo};
        }
        
        html {
            background-color: var(--app-background-color);
        }
        
        body {
            font-family: ${theme.text.family.primary}, ${theme.text.family.serifSetting};
            background-color: var(--primary-color);
            margin: 0px;
            border-radius: 10px;
            color: var(--text-color);
        }
        
        main {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        .mainSection {
            max-width: 1800px;
        }
    `;

    return (
    <style>
        {cssToInsert}
    </style>
    );
};

export default ThemeSheet;