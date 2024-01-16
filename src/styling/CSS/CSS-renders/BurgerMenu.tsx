import theme from './theme/theme';

const cssToInsert = `

/* Position and sizing of burger button */
.bm-burger-button {
    position: absolute;
    width: 36px;
    height: 30px;
    right: 36px;
    top: 36px;
  }
  
  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: ${theme.colors.secondary};
  }
  
  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: #aaa;
  }
  
  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }
  
  /* Color/shape of close button cross */
  .bm-cross {
    background: #bdc3c7;
  }
  
  /*
  Sidebar wrapper styles
  Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
  */
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
  }
  
  /* General sidebar styles */
  .bm-menu {
    background: #ededed;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }
  
  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }
  
  /* Wrapper for item list */
  .bm-item-list {
    color: ${theme.text.colors.dark};
    padding: 0.8em;
  }
  
  /* Individual item */
  .bm-item {
    display: inline-block;
  }
  
  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
`;


const BurgerMenuSheet = () => {

    
    return (
    <style>
        {cssToInsert}
    </style>
    );
};

export default BurgerMenuSheet;