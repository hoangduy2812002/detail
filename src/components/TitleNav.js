export default function TitleNav({ title, language, description }) {


    return (
        <>
            <div className="divider">
                <div className="horizontal-line"></div>
                    <div className="title">{title}
                    </div>
                    <div className="language">- {language} - </div>
                    <div className="description">{description}</div> 
                <div className="horizontal-line"></div>
            </div>
        </>
    )
}