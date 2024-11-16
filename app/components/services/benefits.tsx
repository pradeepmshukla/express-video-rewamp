const Benefits = (props: any) => {
    return (
        <>
            <div className="wrapper benefits">
                <div className="container">
                    <div className="content1">{props.contents.content1}</div>
                    <div className="content2">{props.contents.content2}</div>
                    <div className="line"></div>
                    {props.contents.subcontent.map((item: any, i: any) => {
                        return (
                            <div key={i} className="benifits-contents">
                                <div className="title">
                                    {item.title}
                                </div>
                                <div className="description">
                                    {item.description}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>


        </>
    );
};

export default Benefits;
