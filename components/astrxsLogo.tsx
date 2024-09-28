const AstrxsLogo = ({size} : {size?: string}) => {
    return (
        <span className={`font-bold text-primary ${size}`}>
            astr<span color="primary" className="text-foreground">x</span>s
        </span>
    )
} 

export default AstrxsLogo;