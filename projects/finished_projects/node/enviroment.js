process.LoadEnvFile('.env');

const required = ['STUDENT_NAME', 'CLASSROOM'];

const absent = required.filter((name)=>!process.env[name]?.trim());

if (absent.length){
	console.error(`Configure: ${absent.join(',')}`)
	process.exitCode = 3;
} 
else {
	console.log({student: process.env.NOME_ALUNO, tumra:process.env.CLASSROOM})
}
