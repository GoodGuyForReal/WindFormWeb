import DefaultInput from "./inputDefault/DefaultInput";
import InputDropdown from "./inputDropdown/InputDropdown";
import InputIcon from "./inputIcon/InputIcon";
import InputMultiSelect from "./inputMultiSelect/InputMultiSelect";
import InputEmailIsValid from "./inputValidError/InputEmailIsValid";
import InputPassword from "./inputPassword/InputPassword";
import InputUrl from "./inputUrl/InputUrl";
import InputHint from "./inputHint/InputHint";
import InputDropdownOutside from "./inputDropdownOutside/InputDropdownOutside";
import ToggleSwitch from "./toggleDefault/ToggleSwitch";
import ToggleWithLabel from "./toggleWithLabel/ToggleWithLabel";
import CheckDefault from "./checkDefault/CheckDefault";
import ToggleDisable from "./toggledDissable/ToggleDisable";

export const InputMain = [
    {
        title: 'Inputs',
        subComponent: [
            {
                name: 'Default',
                component: <DefaultInput />,
                code: ``,
            },
            {
                name: 'Valid Error',
                component: <InputEmailIsValid />,
                code: ``,
            },
            {
                name: 'Info',
                component: <InputHint />,
                code: ``,
            },
            {
                name: 'Password',
                component: <InputPassword />,
                code: ``,
            },
            {
                name: 'Search with icon',
                component: <InputIcon />,
                code: ``,
            },
            {
                name: 'Input with dropdown Outside',
                component: <InputDropdownOutside />,
                code: ``,
            },
            {
                name: 'Input with dropdown',
                component: <InputDropdown />,
                code: ``,
            },
            {
                name: 'URL',
                component: <InputUrl />,
                code: ``,
            },
            {
                name: 'Input Multi select',
                component: <InputMultiSelect />,
                code: ``,
            },
            {
                name: 'Toggle Switch',
                component: <ToggleSwitch />,
                code: ``,
            },
            {
                name: 'Toggle With Label',
                component: <ToggleWithLabel />,
                code: ``,
            },
            {
                name: 'Toggle Disable',
                component: <ToggleDisable />,
                code: ``,
            },
            {
                name: 'Checkbox Default',
                component: <CheckDefault />,
                code: ``,
            },
        ]
    }
];