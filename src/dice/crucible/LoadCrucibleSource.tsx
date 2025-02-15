import { LoaderFunctionArgs } from "react-router";

export default async function loader({ params }: LoaderFunctionArgs<{ name: string }>) {
    const name = params.name;
    console.debug("name", name);
    const data = await import(`../../static/d66/${name}.json`);
    console.debug("data", data);
    // return data;
    return Response.json({test: "dog"});
}
