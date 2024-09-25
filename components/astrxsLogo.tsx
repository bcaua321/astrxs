const AstrxsLogo = ({size} : {size: number}) => {
    return (
        <span className={`capitalize font-bold text-primary text-[${size}]`}>
            astr<span color="primary" className="text-foreground">x</span>s
        </span>
    )
} 

export default AstrxsLogo;