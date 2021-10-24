import { useState } from "react";
import ZulaLayoutThreeColumn from "../components/ZulaLayoutThreeColumn";
import { JsonForms } from '@jsonforms/react';
//import { vanillaCells, vanillaRenderers } from '@jsonforms/vanilla-renderers';
import { materialCells, materialRenderers } from '@jsonforms/material-renderers';

const schema = {
    "type": "object",
    "properties": {
        "locale": {
            "type": "string",
            "enum": [
                "fr",
                "de",
                "en"
            ]
        },
        "title": {
            "type": "string"
        },
        "content": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "order": {
                        "type": "integer",
                        "minimum": 0
                    },
                    "uri": {
                        "type": "string"
                    }
                }
            }
        }
    },
    "required": [
        "locale",
        "title",
        "content"
    ]
}

export default function NewTranslation() {
    const [data, setData] = useState()
    return (
        <ZulaLayoutThreeColumn content={
            <>
                <JsonForms
                    schema={schema}
                    data={data}
                    renderers={materialRenderers}
                    cells={materialCells}
                    onChange={({ data }) => {
                        console.log(data)
                        setData(data)
                    }}
                />
            </>
        } />
    )
}