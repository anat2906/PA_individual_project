import FormField from "./FormField";

export default function TextareaForm(props) {
    return <FormField type="textarea" item={props.item} {...props} />
}