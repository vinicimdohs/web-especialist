import React from "react";

export default function Toggle({onToggle, enabled, description1, description2}) {
    const handleChange = (e) => {
        const isChecked = e.target.checked;
        onToggle(isChecked);
    };
  
    const {divStyle, labelStyle} = styles;
    return (
        <div style={divStyle} className="switch">
            <label style={labelStyle}>
                {description1}
                <input type="checkbox" checked={enabled} onChange={handleChange} />
                <span className="lever"></span>
                {description2}
            </label>
        </div>
    );
}

const styles = {
    divStyle: {
        marginLeft: "20px",
    },
    labelStyle: {
        fontWeight: "bold",
        color: "black",
        fontSize: "20px",
    }
}
