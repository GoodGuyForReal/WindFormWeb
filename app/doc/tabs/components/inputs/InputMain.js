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
import CheckWithLabel from "./checkWithLabel/CheckWithLabel";
import CheckDisable from "./checkDisable/CheckDisable";
import InputFileDefault from "./inputFileDefault/InputFileDefault";
import InputFileSmall from "./inputFileSmall/InputFileSmall";
import InputSuccess from "./inputSuccess/InputSuccess";
import TabDefault from "./tabDefault/TabDefault";
import TabLine from "./tabLine/TabLine";



export const InputMain = [
    {
        title: 'Inputs',
        subComponent: [
            {
                name: 'Input Default',
                component: <DefaultInput />,
                code: ``,
            },
            {
                name: 'Input Error',
                component: <InputEmailIsValid />,
                code: ``,
            },
            {
                name: 'Input Success',
                component: <InputSuccess />,
                code: ``,
            },
            {
                name: 'Input With Description',
                component: <InputHint />,
                code: ``,
            },
            {
                name: 'Input Password',
                component: <InputPassword />,
                code: ``,
            },
            {
                name: 'Input Search with icon',
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
                name: 'Input URL',
                component: <InputUrl />,
                code: ``,
            },
            {
                name: 'Input Multi select',
                component: <InputMultiSelect />,
                code: ``,
            },
            {
                name: 'Input Toggle Switch',
                component: <ToggleSwitch />,
                code: ``,
            },
            {
                name: 'Input Toggle With Label',
                component: <ToggleWithLabel />,
                code: ``,
            },
            {
                name: 'Input Toggle Disable',
                component: <ToggleDisable />,
                code: ``,
            },
            {
                name: 'Input Checkbox Default',
                component: <CheckDefault />,
                code: ``,
            },
            {
                name: 'Input Check With Label',
                component: <CheckWithLabel />,
                code: ``,
            },
            {
                name: 'Input Check Disable',
                component: <CheckDisable />,
                code: ``,
            },
            {
                name: 'Input File Default',
                component: <InputFileDefault />,
                code: ``,
            },
            {
                name: 'Input File Small',
                component: <InputFileSmall />,
                code: ``,
            },
            {
                name: 'Tab Default',
                component: <TabDefault />,
                code: ``,
            },
            {
                name: 'Tab Line',
                component: <TabLine />,
                code: ``,
            },
        ]
    }
];