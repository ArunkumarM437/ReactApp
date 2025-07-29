function Footer(props){
    const currentYear = new Date().getFullYear();
    return (        
        <>
            <div className="footer">
                 <p>© {currentYear} Arunkumar M. All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer