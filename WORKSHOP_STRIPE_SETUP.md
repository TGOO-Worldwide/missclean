# Configuração do Stripe Payment Link - Workshop Lar Equilibrado

Este documento explica como configurar e gerenciar o sistema de pagamento do Workshop Lar Equilibrado usando Stripe Payment Links.

## 📋 Índice

1. [Configuração Inicial do Stripe](#configuração-inicial-do-stripe)
2. [Criar Payment Link](#criar-payment-link)
3. [Atualizar Link no Código](#atualizar-link-no-código)
4. [Gerenciar Inscrições](#gerenciar-inscrições)
5. [Testar em Modo Test](#testar-em-modo-test)
6. [Ativar em Produção](#ativar-em-produção)
7. [Controle de Vagas](#controle-de-vagas)
8. [Emails Automáticos](#emails-automáticos)
9. [Política de Reembolso](#política-de-reembolso)
10. [Troubleshooting](#troubleshooting)

---

## Configuração Inicial do Stripe

### 1. Criar Conta Stripe

1. Acesse [https://stripe.com](https://stripe.com)
2. Clique em **Sign Up** (Criar conta)
3. Preencha os dados da empresa:
   - Email
   - Nome da empresa: **Miss Clean**
   - País: **Portugal**
4. Verifique o email de confirmação
5. Complete o cadastro com informações fiscais

### 2. Ativar Modo de Teste

⚠️ **IMPORTANTE**: Comece sempre em **Test Mode** antes de ir para produção!

1. No dashboard do Stripe, procure o toggle no canto superior direito
2. Certifique-se de que está em **"Test mode"** (fundo laranja/cinza)
3. Todos os pagamentos em test mode são simulados e não cobram dinheiro real

---

## Criar Payment Link

### Passo 1: Criar Produto

1. No dashboard do Stripe, vá para **Products** (Produtos) no menu lateral
2. Clique em **+ Add product** (Adicionar produto)
3. Preencha as informações:
   
   ```
   Name: Workshop Lar Equilibrado - 21/02/2026
   Description: Workshop prático de Limpeza Ecológica, Feng Shui e Aromaterapia. Transforma a tua casa, energia e bem-estar familiar!
   ```

4. Configure o preço:
   - **Price**: 35.00
   - **Currency**: EUR (€)
   - **Billing**: One-time (Pagamento único)

5. (Opcional) Adicione uma imagem do workshop
   - Tamanho recomendado: 1200x630px
   - Formato: JPG ou PNG

6. Clique em **Save product**

### Passo 2: Criar Payment Link

1. No menu lateral, vá para **Payment links**
2. Clique em **+ New** (Novo)
3. Selecione o produto **"Workshop Lar Equilibrado"** que acabou de criar

#### Configurações do Payment Link:

**1. Quantidade (Quantity)**
- Deixe configuração padrão ou limite a 1 inscrição por transação
- ✅ **Recommended**: Adjust quantity = OFF (uma inscrição por vez)

**2. Coletar Informações do Cliente (Collect customer information)**

✅ **Marque estas opções:**
- ☑️ **Name** - Obrigatório
- ☑️ **Email** - Obrigatório (já vem marcado por padrão)
- ☑️ **Phone number** - Obrigatório

**3. URLs de Redirecionamento (After payment)**

Configure para onde o cliente será redirecionado após o pagamento:

```
Success URL: https://missclean.pt/workshop/sucesso
Cancel URL: https://missclean.pt/workshop/cancelado
```

⚠️ **Para desenvolvimento local**, use:
```
Success URL: http://localhost:5174/workshop/sucesso
Cancel URL: http://localhost:5174/workshop/cancelado
```

**4. Opções Adicionais**

- ☑️ **Allow promotion codes** - Ativar se quiser oferecer cupons de desconto
- **Require billing address** - Deixar DESATIVADO (não necessário)
- **Custom fields** - Deixar vazio (já temos nome, email e telefone)

**5. Criar o Link**

1. Clique em **Create link** (Criar link)
2. O Stripe irá gerar um link único
3. **Copie o link** - formato: `https://buy.stripe.com/test_XXXXXXXXXXXXX`

Exemplo de link de teste:
```
https://buy.stripe.com/test_9AQaFO1234567890ab
```

Exemplo de link de produção:
```
https://buy.stripe.com/eVa1234567890abcDE
```

---

## Atualizar Link no Código

Agora você precisa adicionar o Payment Link no código do site.

### Localização do Arquivo

Abra o arquivo: `src/pages/WorkshopLarEquilibrado.tsx`

### Encontre a Linha

Procure por esta constante no início do componente:

```typescript
const STRIPE_PAYMENT_LINK = 'https://buy.stripe.com/test_xxxxxxxx';
```

### Substitua pelo Seu Link

Cole o link que você copiou do Stripe:

```typescript
// Modo Test
const STRIPE_PAYMENT_LINK = 'https://buy.stripe.com/test_9AQaFO1234567890ab';

// Modo Produção (quando ativar)
const STRIPE_PAYMENT_LINK = 'https://buy.stripe.com/eVa1234567890abcDE';
```

### Salvar e Testar

1. Salve o arquivo
2. O servidor de desenvolvimento irá recarregar automaticamente
3. Acesse `http://localhost:5174/workshop-lar-equilibrado`
4. Teste clicando no botão "Inscrever-me Agora"

---

## Gerenciar Inscrições

### Ver Lista de Inscritos

1. No Stripe Dashboard, vá para **Payments** (Pagamentos)
2. Você verá uma lista de todas as transações
3. Use o filtro de busca para encontrar pagamentos específicos

### Filtrar por Workshop

Opção 1: **Buscar por produto**
```
Na barra de busca, digite: Workshop Lar Equilibrado
```

Opção 2: **Filtros avançados**
1. Clique em **Add filter**
2. Selecione **Product**
3. Escolha "Workshop Lar Equilibrado - 21/02/2026"

### Ver Detalhes de uma Inscrição

1. Clique em qualquer pagamento da lista
2. Você verá:
   - **Customer details**: Nome, email, telefone
   - **Amount**: 35€
   - **Date**: Data e hora da inscrição
   - **Status**: succeeded (bem-sucedido)
   - **Payment method**: Cartão usado
   - **Receipt**: Recibo enviado por email

### Exportar Lista de Participantes

Para criar uma lista Excel dos inscritos:

1. Na página **Payments**, aplique o filtro do workshop
2. Clique em **Export** (Exportar) no canto superior direito
3. Escolha o formato:
   - **CSV** - Para Excel/Google Sheets
   - **JSON** - Para sistemas customizados
4. Selecione o período de datas
5. Clique em **Export**

O arquivo incluirá:
- Nome completo
- Email
- Telefone
- Valor pago
- Data da transação
- ID da transação

### Buscar um Inscrito Específico

Use a barra de busca no topo:
- Por nome: `João Silva`
- Por email: `joao@example.com`
- Por telefone: `913034241`
- Por valor: `35`

---

## Testar em Modo Test

### Cartões de Teste

O Stripe fornece cartões de teste para simular pagamentos:

**Cartão de Sucesso:**
```
Número: 4242 4242 4242 4242
Data: Qualquer data futura (ex: 12/28)
CVC: Qualquer 3 dígitos (ex: 123)
Nome: Qualquer nome
```

**Outros Cartões de Teste:**

❌ **Cartão Recusado:**
```
4000 0000 0000 0002
```

⚠️ **Requer Autenticação 3D Secure:**
```
4000 0027 6000 3184
```

💳 **Cartão Mastercard:**
```
5555 5555 5555 4444
```

### Fluxo de Teste Completo

1. Acesse a página do workshop em desenvolvimento:
   ```
   http://localhost:5174/workshop-lar-equilibrado
   ```

2. Clique em **"Inscrever-me Agora"**

3. Você será redirecionado para o Stripe Checkout

4. Preencha o formulário com dados de teste:
   ```
   Name: João Teste
   Email: teste@example.com
   Phone: +351 912 345 678
   Card: 4242 4242 4242 4242
   Date: 12/28
   CVC: 123
   ```

5. Clique em **Pay €35**

6. Você deve ser redirecionado para:
   ```
   http://localhost:5174/workshop/sucesso
   ```

7. Verifique no Stripe Dashboard:
   - Vá para **Payments**
   - Você deve ver o pagamento de teste de €35
   - Clique nele para ver os detalhes

### Testar Cancelamento

1. Repita os passos acima
2. Na página do Stripe Checkout, clique na **seta voltar** do navegador
3. Você deve ser redirecionado para:
   ```
   http://localhost:5174/workshop/cancelado
   ```

---

## Ativar em Produção

⚠️ **Só faça isso quando estiver tudo testado!**

### Passo 1: Configurar Conta para Produção

1. Complete todas as informações da empresa no Stripe
2. Adicione informações bancárias para receber os pagamentos
3. Verifique sua identidade (documento)

### Passo 2: Mudar para Live Mode

1. No dashboard do Stripe, clique no toggle **Test mode** → **Live mode**
2. O fundo mudará de cinza para verde/azul

### Passo 3: Criar Produto e Payment Link em Produção

Repita TODOS os passos da seção [Criar Payment Link](#criar-payment-link), mas agora em **Live mode**:

1. Criar produto em Live
2. Criar Payment Link em Live com URLs de produção:
   ```
   Success: https://missclean.pt/workshop/sucesso
   Cancel: https://missclean.pt/workshop/cancelado
   ```
3. Copiar o novo link de produção

### Passo 4: Atualizar o Código

No arquivo `src/pages/WorkshopLarEquilibrado.tsx`:

```typescript
// Substituir link de test pelo de produção
const STRIPE_PAYMENT_LINK = 'https://buy.stripe.com/eVa1234567890abcDE';
```

### Passo 5: Deploy do Site

1. Faça commit das alterações
2. Faça push para o repositório
3. Deploy na plataforma (Vercel, Netlify, etc.)

### Passo 6: Teste Final em Produção

⚠️ **Use um cartão real com valor baixo para testar**

1. Acesse o site em produção: `https://missclean.pt/workshop-lar-equilibrado`
2. Faça uma inscrição de teste
3. Use um cartão real (será cobrado €35)
4. Verifique:
   - Redirecionamento para página de sucesso ✅
   - Email de confirmação recebido ✅
   - Pagamento aparece no Stripe Dashboard (Live mode) ✅
5. Processar reembolso no Stripe se foi apenas teste

---

## Controle de Vagas

O Stripe Payment Link não tem controle automático de vagas, mas você pode gerenciar manualmente:

### Opção 1: Desativar o Link Quando Esgotar

1. Vá para **Payment links** no Stripe
2. Encontre o link do workshop
3. Clique nos 3 pontinhos ⋮ 
4. Selecione **Archive** (Arquivar)
5. O link ficará inativo

No site, você pode:
- Remover o botão de inscrição
- Adicionar badge "ESGOTADO"
- Mostrar mensagem de lista de espera

### Opção 2: Acompanhar Manualmente

1. Defina o número máximo de vagas (ex: 20 pessoas)
2. Monitore o Stripe Dashboard diariamente
3. Quando atingir 20 inscrições, desative o link
4. Envie comunicado nas redes sociais

### Opção 3: Criar Produto com Inventário (Advanced)

No Stripe, ao criar o produto:
1. Marque **Track inventory**
2. Set quantity: 20 (ou número de vagas)
3. O Stripe bloqueará automaticamente após 20 vendas

---

## Emails Automáticos

### Email Padrão do Stripe

O Stripe envia automaticamente um email de confirmação para cada participante contendo:
- ✅ Nome do produto (Workshop)
- ✅ Valor pago (€35)
- ✅ Data da transação
- ✅ Recibo em PDF
- ✅ Detalhes do pagamento

### Personalizar Email de Confirmação

1. No Stripe Dashboard, vá para **Settings** → **Emails**
2. Encontre **Customer emails** → **Successful payments**
3. Clique em **Customize**
4. Edite o template:
   - Adicione logo da Miss Clean
   - Personalize a mensagem
   - Adicione informações do workshop
   - Adicione contactos

Exemplo de mensagem personalizada:
```
Olá {{customer_name}},

Obrigado pela sua inscrição no Workshop Lar Equilibrado!

📅 Data: 21 de Fevereiro de 2026
📍 Local: Mais q'uma Papelaria, Esgueira, Aveiro
⏰ Horário: [A confirmar]

O que trazer: Apenas a sua vontade de aprender! Todo o material será fornecido.

Dúvidas? Entre em contacto:
📧 info@missclean.pt
📱 +351 913 034 241

Estamos ansiosos para te receber!

Equipa Miss Clean
```

### Enviar Email Adicional (Manual)

Para enviar informações adicionais próximo ao evento:

1. Exporte a lista de inscritos (CSV)
2. Use uma ferramenta de email marketing (Mailchimp, SendGrid, etc.)
3. Importe a lista
4. Envie email com:
   - Lembrete da data
   - Instruções de acesso/estacionamento
   - O que trazer
   - Agenda do dia

---

## Política de Reembolso

### Processar Reembolso no Stripe

1. Vá para **Payments**
2. Encontre a transação do cliente
3. Clique no pagamento
4. Clique em **Refund**
5. Escolha:
   - **Full refund**: Reembolso total (€35)
   - **Partial refund**: Reembolso parcial (ex: €20)
6. Adicione uma razão (opcional)
7. Clique em **Refund €35**

⏱️ **Prazo**: O dinheiro volta ao cartão do cliente em 5-10 dias úteis.

### Política Sugerida

Defina uma política clara no site:

```
Política de Cancelamento:
- Cancelamento até 7 dias antes: Reembolso de 100%
- Cancelamento 3-7 dias antes: Reembolso de 50%
- Cancelamento menos de 3 dias: Sem reembolso
- Em caso de doença: Transferência para próximo workshop
```

Adicione esta política:
- Na página do workshop
- No email de confirmação
- Na FAQ

---

## Troubleshooting

### Problema: Link não funciona

**Sintomas**: Clicar no botão não abre nada ou dá erro

**Soluções**:
1. Verificar se o link está correto no código
2. Verificar se o Payment Link está ativo no Stripe (não arquivado)
3. Limpar cache do navegador
4. Testar em navegador anônimo
5. Verificar console do navegador (F12) para erros JavaScript

### Problema: Redirecionamento não funciona

**Sintomas**: Após pagamento, não volta ao site

**Soluções**:
1. Verificar URLs configuradas no Payment Link
2. Testar as URLs manualmente no navegador
3. Certificar-se de que as rotas existem no React Router
4. Verificar se o site está no ar (produção)

### Problema: Email não chega

**Sintomas**: Cliente não recebe confirmação

**Soluções**:
1. Verificar pasta de SPAM
2. Verificar se o email está correto no Stripe Dashboard
3. Em Test mode, emails são simulados - verifique o Stripe Dashboard
4. Em Live mode, verificar configurações de email no Stripe

### Problema: Pagamento recusado

**Sintomas**: Cartão é recusado durante o checkout

**Soluções para o cliente**:
1. Verificar dados do cartão
2. Verificar saldo/limite disponível
3. Contactar o banco
4. Tentar outro cartão
5. Tentar outro método de pagamento

**Para você**:
1. Verificar se Stripe está configurado para aceitar cartões PT
2. Verificar se não há restrições geográficas
3. Contactar suporte do Stripe se persistir

### Problema: Não consigo ver os inscritos

**Sintomas**: Dashboard vazio ou sem dados

**Soluções**:
1. Verificar se está no modo correto (Test vs Live)
2. Verificar filtros aplicados na busca
3. Verificar período de datas selecionado
4. Atualizar a página
5. Tentar outro navegador

---

## Resumo dos Links Importantes

- **Stripe Dashboard**: https://dashboard.stripe.com
- **Documentação Stripe**: https://stripe.com/docs
- **Cartões de Teste**: https://stripe.com/docs/testing
- **Suporte Stripe**: https://support.stripe.com

---

## Próximos Passos

Após configurar tudo:

1. ✅ Teste completo em modo Test
2. ✅ Configure emails personalizados
3. ✅ Defina política de reembolso
4. ✅ Ative em produção
5. ✅ Teste com pagamento real (pequeno valor)
6. ✅ Divulgue o workshop nas redes sociais
7. ✅ Monitore inscrições diariamente
8. ✅ Prepare material para o dia do evento

---

## Suporte

Se tiver dúvidas ou problemas, você pode:

1. **Documentação Stripe**: https://stripe.com/docs/payments/payment-links
2. **Suporte Stripe**: Chat ao vivo no dashboard (canto inferior direito)
3. **Email Stripe**: support@stripe.com
4. **Comunidade**: https://stripe.com/community

---

**Última atualização**: Fevereiro 2026  
**Versão**: 1.0  
**Autor**: Miss Clean Tech Team
