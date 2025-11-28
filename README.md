# 📚 EduSense: Programa de Acompanhamento de Desempenho Escolar

O **EduSense** é um projeto de desenvolvimento de uma Interface de Programação de Aplicações (**API**) para a **Análise Preditiva de Desempenho Escolar**. O objetivo central é utilizar **Machine Learning** e **Inteligência Artificial (IA)** para identificar, de forma proativa e automatizada, estudantes com alto risco de **declínio de rendimento, atraso no percurso escolar ou evasão**.

---

## 🎯 Conceito e Problema

### 💡 Conceito do Projeto

O EduSense visa transicionar a gestão educacional de um paradigma reativo para um **proativo**. A API fornecerá suporte analítico essencial para a implementação de intervenções pedagógicas mais assertivas e eficazes.

### ⚠️ Descrição do Problema

Apesar da alta taxa de acesso à educação (universalização do Ensino Fundamental), o Brasil enfrenta gargalos significativos na **qualidade**, na **adequação idade-série** e na **conclusão oportuna** do ciclo educacional.

* **Indicadores Preocupantes:**
    * Taxa de escolarização (15 a 17 anos) de **93,4%** (aquém da LDB).
    * **18,5%** dos jovens (15 a 29 anos) não estudam nem trabalham.
    * O sistema falha em intervir proativamente contra o **abandono**, a **evasão** e a **distorção idade-série**, ameaçando o desenvolvimento socioeconômico do país.

---

## 🚀 Objetivos Principais

O projeto foca em resultados tangíveis e melhoria contínua dos indicadores educacionais:

1.  **Desenvolver uma API Preditiva:** Criar uma API robusta para análise de desempenho escolar usando Machine Learning.
2.  **Identificar Risco Antecipadamente:** Automatizar a identificação preditiva de estudantes em potencial risco de declínio de rendimento ou evasão escolar.
3.  **Mudar Paradigma de Gestão:** Promover a transição de uma gestão educacional **reativa** para uma abordagem **proativa** e preventiva.
4.  **Monitorar o Bem-Estar Estudantil:** Integrar a análise de dados emocionais (humor) para gerar alertas de saúde mental para a equipe de apoio.
5.  **Garantir a Segurança dos Dados:** Assegurar a segurança, criptografia e o estrito cumprimento da **LGPD** para todos os dados dos estudantes e usuários.

---

## ⚙️ Metodologia e Arquitetura

O desenvolvimento segue a metodologia **Ágil (Scrum)** com ciclos curtos (Sprints de 2 a 4 semanas) e a implementação de **DevOps** para entrega contínua.

### Abordagem de Machine Learning

A IA será construída no **Amazon SageMaker** com o seguinte fluxo:

1.  **Coleta e Preparação de Dados:** AWS Glue / S3 para limpeza e categorização de dados.
2.  **Treinamento e Modelagem:** Treinamento do modelo preditivo de Risco de Evasão.
3.  **Implantação:** O modelo é disponibilizado como um *endpoint* acessível pela API para análises em tempo real.

### Tecnologias-Chave (AWS)

| Categoria | Serviço AWS | Função no Projeto |
| :--- | :--- | :--- |
| **Armazenamento/Dados** | Amazon S3, AWS Glue | Armazenamento escalável e preparação de dados. |
| **Processamento/ML** | Amazon SageMaker, AWS Lambda | Treinamento e implantação dos modelos preditivos; processamento serverless. |
| **API/Acesso** | Amazon API Gateway | Exposição segura da API de Desempenho Escolar. |
| **Infra/DevOps** | AWS CloudFormation, CloudWatch | Infraestrutura como Código (IaC) e monitoramento de desempenho. |

---

## 📊 Indicadores de Sucesso (KPIs)

O projeto será considerado bem-sucedido baseado nos seguintes indicadores:

### KPIs Técnicos (Qualidade da IA)

* **Acurácia Preditiva:** Meta de **> 80%** de acerto na predição de risco.
* **Tempo de Resposta da API:** Meta de **< 300 ms** por requisição.
* **Disponibilidade (Uptime):** Meta de **99,5%** ou superior.

### KPIs Educacionais (Impacto na Escola)

* **Redução da Evasão Escolar:** Meta de redução mínima de **5%** no primeiro ano.
* **Redução da Distorção Idade-Série:** Meta de aumento de **+1%** ao ano.
* **Taxa de Uso e Adoção:** Meta de **70% de adesão** por escolas e gestores após 1 ano.

### 🌟 Validação do MVP

O MVP é validado se o modelo atingir uma acurácia mínima aceitável (ex: 75%) e os Coordenadores Pedagógicos utilizarem os alertas para iniciar ações preventivas em, pelo menos, **50% dos alunos de alto risco**.

---

## 👥 Equipe EduSense

O projeto é desenvolvido pelo Grupo 3:

* **João José Penha Souza:** System Analyst
* **João Vitor Alves da Silva:** Cloud Computing
* **Jorge Lázaro Lima Dos Santos**
* **Larissa Carvalho Pavan:** Software Engineer
* **Natalia Berbet Viana:** Análise de Dados
* **Yara Xavier De Sousa:** Software Engineer

---

## 📞 Contato

Para mais informações, consulte o painel de apresentação interativo.

---
## ⚖️ Licenciamento

O projeto EduSense é distribuído sob a Licença **GNU General Public License, Versão 3 (GPLv3)**.

Esta é uma licença *Copyleft*, o que significa que o código é livre para uso, modificação e distribuição, mas qualquer trabalho derivado (modificado) também deve ser lançado sob a mesma licença para garantir que permaneça de código aberto.

Para detalhes completos, consulte o arquivo [LICENSE](LICENSE) na raiz deste repositório.