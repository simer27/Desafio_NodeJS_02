/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);

  console.log("Desafio 002.");
  // CÓDIGO PARA ATENDER OS REQUERIMENTOS
  // R01, R02, R03, R04, R05

  const nome1: string = "Simeao Almeida";
  const idade1: number = 38;
  const peso1: number = 102.3;
  const altura1: number = 1.86;
  const ehDev1: boolean = true;

  const nome2: string = "Marcos Silva";
  const idade2: number = 22;
  const peso2: number = 87.3;
  const altura2: number = 1.76;
  const ehDev2: boolean = false;

  const nome3: string = "Maria da Silva";
  const idade3: number = 23;
  const peso3: number = 68;
  const altura3: number = 1.66;
  const ehDev3: boolean = true;

  //console.log(
  // `Nome: ${nome1}, Idade: ${idade1}, Peso: ${peso1}, Altura: ${altura1}, É Desenvolvedor: ${ehDev1}`
  //);

  // R01
  function somar() {
    var n1 = idade1;
    var n2 = idade2;
    var n3 = idade3;

    var resultado = n1 + n2 + n3;
    console.log(`(R01) A Soma das Idades é: ${resultado}`);
  }

  somar();

  // R02
  function agrupar() {
    var n1 = nome1;
    var n2 = nome2;
    var n3 = nome3;
    console.log(`(R02) ${n1}, ${n2}, ${n3}`);
  }
  agrupar();

  //R03
  function imc() {
    var a1 = altura1;
    var p1 = peso1;
    var a2 = altura2;
    var p2 = peso2;
    var a3 = altura3;
    var p3 = peso3;

    var imc1 = p1 / (a1 * a1);
    var imc2 = p2 / (a2 * a2);
    var imc3 = p3 / (a3 * a3);

    console.log(`(R03) IMC do ${nome1} = ${imc1.toFixed(2)} `);
    console.log(`(R03) IMC do ${nome2} = ${imc2.toFixed(2)} `);
    console.log(`(R03) IMC do ${nome3} = ${imc3.toFixed(2)} `);
  }
  imc();

  //R04
  function contar() {
    const cont = [ehDev1, ehDev2, ehDev3];
    var i = 0;
    cont.forEach((element) => {
      if (element == true) {
        i = i + 1;
      }
    });
    console.log(`(R04) Quantidade de Desenvolvedores no time é: ${i}`);
  }
  contar();

  //R05
  function ExibirSilva() {
    const exibir = [nome1, nome2, nome3];
    for (let i = 0; i < 3; i++) {
      if (exibir[i].includes("Silva")) {
        console.log(`(R05) Devs com o SobreNome "Silva" : ${exibir[i]}`);
      }
    }
  }

  ExibirSilva();
});
