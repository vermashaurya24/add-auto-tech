const SmallContentCard = (props) => {
    return (
        <div className="m-2 p-2 bg-white h-fit rounded-2xl">
            <div className="text-2xl border-b-2 font-bold text-center">{props.title}</div>
            <div>{props.children}</div>
        </div>
    )
};

export default SmallContentCard;