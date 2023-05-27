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
import ToggleDisableJS from "./toggledDissable/ToggleDisableJS";
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
                href: 'DefaultInput'
            },
            {
                name: 'Input Error',
                component: <InputValidError />,
                code: ``,
                href: 'InputValidError'
            },
            {
                name: 'Input Success',
                component: <InputSuccess />,
                code: ``,
                href: 'InputSuccess'
            },
            {
                name: 'Input With Info',
                component: <InputWithInfo />,
                code: ``,
                href: 'InputWithInfo'
            },
            {
                name: 'Input Password',
                component: <InputPasswordTS />,
                code: ``,
                href: 'InputPassword'
            },
            {
                name: 'Input Search with icon',
                component: <InputIcon />,
                code: ``,
                href: 'InputIcon'
            },
            {
                name: 'Input with dropdown Outside',
                component: <InputDropdownOutsideTS />,
                code: ``,
                href: 'InputDropdownOutside'
            },
            {
                name: 'Input with dropdown',
                component: <InputDropdownTS />,
                code: ``,
                href: 'InputDropdown'
            },
            {
                name: 'Input URL',
                component: <InputUrl />,
                code: ``,
                href: 'InputURL'
            },
            {
                name: 'Input Multi Select',
                component: <InputMultiSelectTS />,
                code: ``,
                href: 'InputMultiSelect'
            },
            {
                name: 'Input Toggle Switch',
                component: <ToggleSwitch />,
                code: ``,
                href: 'InputToggleSwitch'
            },
            {
                name: 'Input Toggle With Label',
                component: <ToggleWithLabel />,
                code: ``,
                href: 'InputToggleWithLabel'
            },
            {
                name: 'Input Toggle Disable',
                component: <ToggleDisableJS />,
                code: ``,
                href: 'InputToggleDisable'
            },
            {
                name: 'Input Checkbox Default',
                component: <CheckDefaultTS />,
                code: ``,
                href: 'InputCheckboxDefault'
            },
            {
                name: 'Input Check With Label',
                component: <CheckWithLabelTS />,
                code: ``,
                href: 'InputCheckWithLabel'
            },
            {
                name: 'Input Check Disable',
                component: <CheckDisableTS />,
                code: ``,
                href: 'InputCheckDisable'
            },
            {
                name: 'Input File Default',
                component: <InputFileDefaultTS />,
                code: ``,
                href: 'InputFileDefault'
            },
            {
                name: 'Input File Small',
                component: <InputFileSmallTS />,
                code: ``,
                href: 'InputFileSmall'
            },
            {
                name: 'Tab Default',
                component: <TabDefaultTS />,
                code: ``,
                href: 'TabDefault'
            },
            {
                name: 'Tab Line',
                component: <TabLineTS />,
                code: ``,
                href: 'TabLine'
            },
        ]
    }
];