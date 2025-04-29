export default function extractZodErrors(result) {
    const fieldErrors = {};
    for (const err of result.error.errors) {
        fieldErrors[err.path[0]] = err.message;
    }
    return fieldErrors;
}