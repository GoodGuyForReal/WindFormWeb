import axios from "axios";

export async function FetchFileDataFromGithub(path: string) {
  const owner: string = "GoodGuyForReal";
  const repo: string = "Wind-Form";
  const filePath: string = path;

  try {
    const url: string = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`;
    const response = await axios.get(url);
    const fileContents = response.data.content;
    const decodedData: string = Buffer.from(fileContents, "base64").toString(
      "utf-8"
    );
    return decodedData;
  } catch (error: any) {
    console.log("Error:", error.message);
  }
}
