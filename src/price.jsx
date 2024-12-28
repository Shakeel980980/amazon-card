function Price({oldPrice, newPrice}){
    let oldstyle = {textDecorationLine: "Line-through"};
    let newstyle = {fontWeight:" bold"};
    let styles = {
    backgroundColor:"#FFD700", 
    height:"40px",
    borderBottomRightRadius:"20px",
    borderBottomLeftRadius:"20px",
    marginTop:"17px",
    paddingTop:"10px",
    };
    return(
        <div style={styles}>
            <span style={oldstyle}>{oldPrice}</span>
            &nbsp; &nbsp; &nbsp;
            <span style={newstyle}>{newPrice}</span>
        </div>
    )
}
export default Price