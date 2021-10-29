import { useState } from "react";

export const especie = [
  { value: "cachorro", label: "Cachorro" },
  { value: "gato", label: "Gato" },
];
export const porte = [
  { value: "pequeno", label: "Pequeno" },
  { value: "médio", label: "Médio" },
  { value: "grande", label: "Grande" },
];
export const idade = [
  { value: "menor1", label: "Menos de 1 ano" },
  { value: "um", label: "1 ano" },
  { value: "dois", label: "2 anos" },
  { value: "tres", label: "3 anos" },
  { value: "quatro", label: "4 anos" },
  { value: "cinco", label: "5 anos" },
  { value: "seis", label: "6 anos" },
  { value: "sete", label: "7 anos" },
  { value: "oito", label: "8 anos" },
  { value: "maior", label: "9 anos ou mais" },
  { value: "naoSei", label: "Não sei informar" },
];
export const local = [
  { value: "df", label: "DF - Distrito Federal" },
  { value: "ac", label: "AC - Acre" },
  { value: "ap", label: "AP - Amapá" },
  { value: "am", label: "AM - Amazonas" },
  { value: "pa", label: "PA - Pará" },
  { value: "ro", label: "RO - Rondônia" },
  { value: "rr", label: "RR - Roraima" },
  { value: "to", label: "TO - Tocantins" },
  { value: "al", label: "AL - Alagoas" },
  { value: "ba", label: "BA - Bahia" },
  { value: "ce", label: "CE - Ceará" },
  { value: "ma", label: "MA - Maranhão" },
  { value: "pb", label: "PB - Paraíba" },
  { value: "pe", label: "PE - Pernambuco" },
  { value: "pi", label: "PI - Piauí" },
  { value: "rn", label: "RN - Rio Grande do Norte" },
  { value: "se", label: "SE - Sergipe" },
  { value: "es", label: "ES - Espírito Santo" },
  { value: "mg", label: "MG - Minas Gerais" },
  { value: "rj", label: "RJ - Rio de Janeiro" },
  { value: "sp", label: "SP - São Paulo" },
  { value: "pr", label: "PR - Paraná" },
  { value: "rs", label: "RS - Rio Grande do Sul" },
  { value: "sc", label: "SC - Santa Catarina" },
  { value: "go", label: "GO - Goiás" },
  { value: "mt", label: "MT - Mato Grosso" },
  { value: "ms", label: "MS - Mato Grosso do Sul" },
];
export const sexo = [
  { value: "Macho", label: "Macho" },
  { value: "Femea", label: "Femea" },
  { value: "Indefinido", label: "Indefinido" },
];
export const options = [
  { value: especie, label: "Espécie" },
  { value: porte, label: "Porte" },
  { value: idade, label: "Idade" },
  { value: local, label: "Local" },
  { value: sexo, label: "Sexo" },
];
