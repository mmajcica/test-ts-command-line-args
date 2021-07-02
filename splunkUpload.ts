import { parse } from 'ts-command-line-args';

interface ISplunkArguments {
    baseUrl: string;
    token: string;
    filePath: string;
    help: boolean;
}

const args = parse<ISplunkArguments>({
    baseUrl: { type: String, alias: 'u', description: 'Base Url of Splunk server'},
    token: { type: String, alias: 't', description: 'Security token' }, 
    filePath: { type: String, alias: 'f', description: 'Full path to the report file' },
    help: Boolean,
},
{
    helpArg: 'help',
});

console.log(`exampleConfig args: ${JSON.stringify(args)}`);