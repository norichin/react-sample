import React from "react";
import Radio from "@material-ui/core/Radio";
import InputLabel from "@material-ui/core/InputLabel";

const radios = [1, 2, 3, 4, 5];

export default function RadioButtons(props) {
  const [selectedValue, setSelectedValue] = React.useState(
    String(props.data[props.labels_index])
  );

  const handleChange = event => {
    setSelectedValue(event.target.value);
    props.handleChange(event.target.value, props.labels_index); //親コンポーネントのhandleChangeの呼び出し
  };

  return (
    <div>
      <InputLabel htmlFor="input-with-icon-adornment">{props.title}</InputLabel>
      {radios.map((value, index) => (
        <Radio
          key={index}
          checked={selectedValue === String(value)}
          onChange={handleChange}
          value={String(value)}
          name="radio-button-demo"
        />
      ))}
    </div>
  );
}
