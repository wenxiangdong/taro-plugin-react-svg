import * as svgo from "svgo";
export default function (source) {
  var callback = this.async();
  const encode = function (e) {
    return (
      "data:image/svg+xml," +
      e
        .replace(/"/g, "'")
        .replace(/%/g, "%25")
        .replace(/#/g, "%23")
        .replace(/{/g, "%7B")
        .replace(/}/g, "%7D")
        .replace(/</g, "%3C")
        .replace(/>/g, "%3E")
    );
  };
  const svgString = String(source);
  const res = svgo.optimize(svgString).data;
  const encodedSvg = encode(res);
  callback(
    null,
    `
    import { View } from '@tarojs/components';
    export default (props) => (
    <View {...props} style={{
      background: \`no-repeat center/100% url(\"${encodedSvg}\")\`,
      ...(props.style || {})
    }}></View>
  )`
  );
}
