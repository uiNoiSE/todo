import React, { useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { CheckboxStyles as CBS } from "./CheckboxStyles";

export default function CheckBox({ item: { title, checked } }) {
  const [checkboxState, setCheckboxState] = useState(checked);

  return (
    <BouncyCheckbox
      disableBuiltInState={true}
      text={title}
      isChecked={checkboxState}
      onPress={() => setCheckboxState((checkboxState) => !checkboxState)}
      size={18}
      style={CBS.itemContainer}
      iconStyle={CBS.iconOuter}
      textStyle={CBS.title}
      innerIconStyle={CBS.iconInner}
      fillColor="#FFD615"
      iconComponent={<></>}
    />
  );
}
