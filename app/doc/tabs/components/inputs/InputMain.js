import DefaultInput from "./inputDefault/DefaultInput";
import InputDropdownTS from "./inputDropdown/InputDropdownTS";
import InputIcon from "./inputIcon/InputIcon";
import InputValidError from "./inputValidError/InputValidError";
import InputUrl from "./inputUrl/InputUrl";
import InputWithInfo from "./inputHint/InputWithInfo";
import InputDropdownOutsideTS from "./inputDropdownOutside/InputDropdownOutsideTS";
import ToggleSwitch from "./toggleDefault/ToggleSwitch";
import ToggleWithLabel from "./toggleWithLabel/ToggleWithLabel";
import CheckDefaultTS from "./checkDefault/CheckDefaultTS";
import ToggleDisable from "./toggledDissable/ToggleDisable";
import CheckWithLabelTS from "./checkWithLabel/CheckWithLabelTS";
import CheckDisableTS from "./checkDisable/CheckDisableTS";
import InputSuccess from "./inputSuccess/InputSuccess";
import InputFileDefaultTS from "./inputFileDefault/InputFileDefaultTS";
import InputFileSmallTS from "./inputFileSmall/InputFileSmallTS";
import InputMultiSelectTS from "./inputMultiSelect/InputMultiSelectTS";
import InputPasswordTS from "./inputPassword/InputPasswordTS";
import TabDefaultTS from "./tabDefault/TabDefaultTS";
import TabLineTS from "./tabLine/TabLineTS";



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
                component: <InputValidError />,
                code: ``,
            },
            {
                name: 'Input Success',
                component: <InputSuccess />,
                code: ``,
            },
            {
                name: 'Input With Info',
                component: <InputWithInfo />,
                code: ``,
            },
            {
                name: 'Input Password',
                component: <InputPasswordTS />,
                code: ``,
            },
            {
                name: 'Input Search with icon',
                component: <InputIcon />,
                code: ``,
            },
            {
                name: 'Input with dropdown Outside',
                component: <InputDropdownOutsideTS />,
                code: ``,
            },
            {
                name: 'Input with dropdown',
                component: <InputDropdownTS />,
                code: ``,
            },
            {
                name: 'Input URL',
                component: <InputUrl />,
                code: ``,
            },
            {
                name: 'Input Multi select',
                component: <InputMultiSelectTS />,
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
                component: <CheckDefaultTS />,
                code: ``,
            },
            {
                name: 'Input Check With Label',
                component: <CheckWithLabelTS />,
                code: ``,
            },
            {
                name: 'Input Check Disable',
                component: <CheckDisableTS />,
                code: ``,
            },
            {
                name: 'Input File Default',
                component: <InputFileDefaultTS />,
                code: ``,
            },
            {
                name: 'Input File Small',
                component: <InputFileSmallTS />,
                code: ``,
            },
            {
                name: 'Tab Default',
                component: <TabDefaultTS />,
                code: ``,
            },
            {
                name: 'Tab Line',
                component: <TabLineTS />,
                code: ``,
            },
        ]
    }
];