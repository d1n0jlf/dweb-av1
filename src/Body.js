const Body = () => {
    const ytVideoIframe = <iframe width="560" height="315" src="https://www.youtube.com/embed/Tn6-PIqc4UM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    const outsideLink = 'https://reactjs.org/docs/components-and-props.html'
    return ( 
        <div className="body">
            { ytVideoIframe }
            <a href={ outsideLink } style={{ textDecoration: 'none', color: '#C9DDFF' }}>
                Explicação sobre Components 
            </a>
        </div> 
        );
}
 
export default Body;