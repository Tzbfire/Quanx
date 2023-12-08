let body = $response.body;

try {
    let obj = JSON.parse(body);
    if (obj && obj.result && Array.isArray(obj.result)) {
        for (let i = 0; i < obj.result.length; i++) {
            // 将 enable 字段的值修改为 100
            obj.result[i].enable = 100;
        }
        $done({ body: JSON.stringify(obj) });
    }
} catch (error) {
    console.log("Error parsing JSON:", error.message);
    $done({});
}
