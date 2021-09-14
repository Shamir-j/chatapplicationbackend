const nodemailer = require('nodemailer');
const sendgridTansport = require('nodemailer-sendgrid-transport');
const sendinBlue = require("nodemailer-sendinblue-transport");

const dotenv = require('dotenv');
// load env vars
dotenv.config({ path: './config/.env' });

require('dotenv').config();

const sendBlueKey = process.env.SENDBLUE_API_KEY;
const sendGridKey = process.env.SENDGRID_API_KEY;

// sib-api-v3-sdk

const transporter = nodemailer.createTransport(
  sendgridTansport({
    auth: {
      api_key: sendGridKey,
    },
  })
);
// const transporter = nodemailer.createTransport(
//   sendinBlue({
//     apiKey: sendBlueKey,
//   })
// );


const send_otp = ({
  one_time_password
}) => {
  return `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
<head>
<!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
<meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
<meta content="width=device-width" name="viewport"/>
<!--[if !mso]><!-->
<meta content="IE=edge" http-equiv="X-UA-Compatible"/>
<!--<![endif]-->
<title></title>
<!--[if !mso]><!-->
<link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet" type="text/css"/>
<link href="https://fonts.googleapis.com/css?family=Abril+Fatface" rel="stylesheet" type="text/css"/>
<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css"/>
<!--<![endif]-->
<style type="text/css">
body {
  margin: 0;
  padding: 0;
}
table,
td,
tr {
  vertical-align: top;
  border-collapse: collapse;
}
* {
  line-height: inherit;
}
a[x-apple-data-detectors=true] {
  color: inherit !important;
  text-decoration: none !important;
}
</style>
<style id="media-query" type="text/css">
@media (max-width: 750px) {
  .block-grid,
  .col {
    min-width: 320px !important;
    max-width: 100% !important;
    display: block !important;
  }
  .block-grid {
    width: 100% !important;
  }
  .col {
    width: 100% !important;
  }
  .col_cont {
    margin: 0 auto;
  }
  img.fullwidth,
  img.fullwidthOnMobile {
    max-width: 100% !important;
  }
  .no-stack .col {
    min-width: 0 !important;
    display: table-cell !important;
  }
  .no-stack.two-up .col {
    width: 50% !important;
  }
  .no-stack .col.num2 {
    width: 16.6% !important;
  }
  .no-stack .col.num3 {
    width: 25% !important;
  }
  .no-stack .col.num4 {
    width: 33% !important;
  }
  .no-stack .col.num5 {
    width: 41.6% !important;
  }
  .no-stack .col.num6 {
    width: 50% !important;
  }
  .no-stack .col.num7 {
    width: 58.3% !important;
  }
  .no-stack .col.num8 {
    width: 66.6% !important;
  }
  .no-stack .col.num9 {
    width: 75% !important;
  }
  .no-stack .col.num10 {
    width: 83.3% !important;
  }

  .video-block {
    max-width: none !important;
  }
  .mobile_hide {
    min-height: 0px;
    max-height: 0px;
    max-width: 0px;
    display: none;
    overflow: hidden;
    font-size: 0px;
  }
  .desktop_hide {
    display: block !important;
    max-height: none !important;
  }
}
</style>
</head>

<body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #ffffff;">
<!--[if IE]><div class="ie-browser"><![endif]-->
<table bgcolor="#ffffff" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="table-layout: fixed; vertical-align: top; min-width: 320px; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; width: 100%;" valign="top" width="100%">

<tbody>
<tr style="vertical-align: top;" valign="top">
<td style="word-break: break-word; vertical-align: top;" valign="top">

<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#ffffff"><![endif]-->
<div style="background-image:url('https://res.cloudinary.com/shamirjamal/image/upload/v1609432487/emailbucket/c2dc29af-0ee6-43eb-b6cc-ba9494dcab0f_fxsa7h.jpg');background-position:center top;background-repeat:no-repeat;background-color:#425bd9;">
<div class="block-grid" style="min-width: 320px; max-width: 730px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">
<div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-image:url('https://res.cloudinary.com/shamirjamal/image/upload/v1609432487/emailbucket/c2dc29af-0ee6-43eb-b6cc-ba9494dcab0f_fxsa7h.jpg');background-position:center top;background-repeat:no-repeat;background-color:#425bd9;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:730px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="730" style="background-color:transparent;width:730px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
<div class="col num12" style="min-width: 320px; max-width: 730px; display: table-cell; vertical-align: top; width: 730px;">
<div class="col_cont" style="width:100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
<!--<![endif]-->

<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 15px; padding-top: 15px; padding-bottom: 15px; font-family: 'Times New Roman', Georgia, serif"><![endif]-->
<div style="color:#555555;font-family:TimesNewRoman, 'Times New Roman', Times, Beskerville, Georgia, serif;line-height:1.2;padding-top:15px;padding-right:20px;padding-bottom:15px;padding-left:15px;">
<div style="line-height: 1.2; font-size: 12px; font-family: TimesNewRoman, 'Times New Roman', Times, Beskerville, Georgia, serif; color: #555555; mso-line-height-alt: 14px;">
<p style="font-size: 30px; line-height: 1.2; word-break: break-word; text-align: right; font-family: TimesNewRoman, 'Times New Roman', Times, Beskerville, Georgia, serif; mso-line-height-alt: 36px; margin: 0;"><span style="font-size: 30px; color: #ffffff;"><strong>Verify your new Smart Hotel<br/>account</strong></span></p>
</div>
</div>
<!--[if mso]></td></tr></table><![endif]-->
<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->

</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>

<div style="background-color:transparent;">
<div class="block-grid" style="min-width: 320px; max-width: 730px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #ffffff;">
<div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:730px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="730" style="background-color:#ffffff;width:730px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 10px; padding-top:15px; padding-bottom:5px;"><![endif]-->
<div class="col num12" style="min-width: 320px; max-width: 730px; display: table-cell; vertical-align: top; width: 730px;">
<div class="col_cont" style="width:100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:15px; padding-bottom:5px; padding-right: 0px; padding-left: 10px;">
<!--<![endif]-->

<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top: 0px; padding-bottom: 0px; font-family: Tahoma, Verdana, sans-serif"><![endif]-->
<div style="color:#555555;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;line-height:1.5;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
<div style="line-height: 1.5; font-size: 12px; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; color: #555555; mso-line-height-alt: 18px;">
<p style="font-size: 16px; line-height: 1.5; word-break: break-word; text-align: left; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 24px; margin: 0;"><span style="font-size: 16px;">To verify your email address, please use the following One Time Password (OTP):</span></p>
<p style="font-size: 14px; line-height: 1.5; word-break: break-word; text-align: left; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 21px; margin: 0;"> </p>
<p style="font-size: 20px; line-height: 1.5; word-break: break-word; text-align: left; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 30px; margin: 0;"><span style="font-size: 20px;"><strong><span style="">${one_time_password}</span></strong></span></p>
<p style="font-size: 14px; line-height: 1.5; word-break: break-word; text-align: left; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 21px; margin: 0;"> </p>
<p style="font-size: 16px; line-height: 1.5; word-break: break-word; text-align: left; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 24px; margin: 0;"><span style="font-size: 16px;">Do not share this One Time Password with anyone. Zaam Technologies takes your account security very seriously. Zaam Technologies Customer Service will never ask you to disclose or verify your Smart Hotel account password, OTP, credit card, or banking account number. If you receive a suspicious email with a link to update your account information, do not click on the link—instead, report the email to Zaam Technologies for investigation.</span></p>
<p style="font-size: 14px; line-height: 1.5; word-break: break-word; text-align: left; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 21px; margin: 0;"> </p>
<p style="font-size: 16px; line-height: 1.5; word-break: break-word; text-align: left; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 24px; margin: 0;"><span style="font-size: 16px;">Thank you for transacting with us. We are here to cater for your hospitality needs.</span></p>
</div>
</div>
<!--[if mso]></td></tr></table><![endif]-->
<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->

</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>
<div style="background-color:transparent;">
<div class="block-grid" style="min-width: 320px; max-width: 730px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #ffffff;">
<div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:730px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="730" style="background-color:#ffffff;width:730px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 10px; padding-top:15px; padding-bottom:5px;"><![endif]-->
<div class="col num12" style="min-width: 320px; max-width: 730px; display: table-cell; vertical-align: top; width: 730px;">
<div class="col_cont" style="width:100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:15px; padding-bottom:5px; padding-right: 0px; padding-left: 10px;">
<!--<![endif]-->
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top: 0px; padding-bottom: 0px; font-family: Tahoma, Verdana, sans-serif"><![endif]-->
<!--[if mso]></td></tr></table><![endif]-->
<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->

</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>
<div style="background-color:#15080f;">
<div class="block-grid" style="min-width: 320px; max-width: 730px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">
<div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#15080f;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:730px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="730" style="background-color:transparent;width:730px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;background-color:#010101;"><![endif]-->
<div class="col num12" style="min-width: 320px; max-width: 730px; display: table-cell; vertical-align: top; background-color: #010101; width: 730px;">
<div class="col_cont" style="width:100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
<!--<![endif]-->

<!--[if (mso)|(IE)]><table width="730" align="center" cellpadding="0" cellspacing="0" role="presentation"><tr><td><![endif]-->
<div align="center" class="video-block" style="max-width:730px;min-width:320px;padding-top:0px;padding-bottom:0px;padding-left:0px;padding-right:0px;">
<!--[if !vml]><!--><a class="video-preview" href="https://www.youtube.com/watch?v=tri7gjlmfdk" style="background-color:#5b5f66;background-image:radial-gradient(circle at center, #5b5f66, #1d1f21);display:block;text-decoration:none;" target="_blank">
<div>
<table background="https://img.youtube.com/vi/tri7gjlmfdk/maxresdefault.jpg" border="0" cellpadding="0" cellspacing="0" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-image: url(https://img.youtube.com/vi/tri7gjlmfdk/maxresdefault.jpg); background-size: cover; min-height: 180px; min-width: 320px;" valign="top" width="100%">
<tr style="vertical-align: top;" valign="top">
<td style="word-break: break-word; vertical-align: top;" valign="top" width="25%"><img alt="" border="0" src="https://beefree.io/img-host/video_ratio_16-9.gif" style="text-decoration: none; -ms-interpolation-mode: bicubic; border: 0; height: auto; opacity: 0; visibility: hidden; display: block;" width="100%"/></td>
<td align="center" style="word-break: break-word; vertical-align: middle;" valign="middle" width="50%">
<div class="play-button_outer" style="display:inline-block;vertical-align:middle;background-color:#ffffff;border:3px solid #ffffff;height:59px;width:59px;border-radius:100%;">
<div style="padding:14.75px 22.69230769230769px;">
<div class="play-button_inner" style="border-style:solid;border-width:15px 0 15px 20px;display:block;font-size:0;height:0;width:0;border-color:transparent transparent transparent #000000;"> </div>
</div>
</div>
</td>
<td style="word-break: break-word; vertical-align: top;" valign="top" width="25%"> </td>
</tr>
</table>
</div>
</a>
<!--<![endif]-->

<!--[if vml]>
<v:group xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" coordsize="730,411" coordorigin="0,0" href="https://www.youtube.com/watch?v=tri7gjlmfdk" style="width:730px;height:411px;">
<v:rect fill="t" stroked="f" style="position:absolute;width:730;height:411;">
<v:fill src="https://img.youtube.com/vi/tri7gjlmfdk/maxresdefault.jpg" type="frame"/>
</v:rect>
<v:oval fill="t" strokecolor="#ffffff" strokeweight="3px" style="position:absolute;left:336;top:176;width:59;height:59">
<v:fill color="#ffffff" opacity="100%" />
</v:oval>
<v:shape coordsize="24,32" path="m,l,32,24,16,xe" fillcolor="#000000" stroked="f" style="position:absolute;left:357;top:191;width:21;height:30;" />
</v:group>
<![endif]-->

</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->

</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>

<div style="background-color:#0068a5;">
<div class="block-grid" style="min-width: 320px; max-width: 730px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">
<div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#0068a5;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:730px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="730" style="background-color:transparent;width:730px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
<div class="col num12" style="min-width: 320px; max-width: 730px; display: table-cell; vertical-align: top; width: 730px;">
<div class="col_cont" style="width:100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
<!--<![endif]-->
<div style="font-size:16px;text-align:center;font-family:TimesNewRoman, Times New Roman, Times, Beskerville, Georgia, serif">
<div style="height:30px;"> </div>
</div>

<table cellpadding="0" cellspacing="0" class="social_icons" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td style="word-break: break-word; vertical-align: top; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">
<table align="center" cellpadding="0" cellspacing="0" class="social_table" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-tspace: 0; mso-table-rspace: 0; mso-table-bspace: 0; mso-table-lspace: 0;" valign="top">
<tbody>
  <tr align="center" style="vertical-align: top; display: inline-block; text-align: center;" valign="top">
  <td style="word-break: break-word; vertical-align: top; padding-bottom: 5px; padding-right: 15px; padding-left: 0;" valign="top"><a href="https://www.facebook.com/" target="_blank"><img alt="Facebook" height="32" src="https://res.cloudinary.com/shamirjamal/image/upload/v1609432486/emailbucket/facebook2x_icqsjo.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;" title="Facebook" width="32"/></a></td>
  <td style="word-break: break-word; vertical-align: top; padding-bottom: 5px; padding-right: 15px; padding-left: 0;" valign="top"><a href="https://twitter.com/" target="_blank"><img alt="Twitter" height="32" src="https://res.cloudinary.com/shamirjamal/image/upload/v1609432487/emailbucket/twitter2x_p8seny.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;" title="Twitter" width="32"/></a></td>
  <td style="word-break: break-word; vertical-align: top; padding-bottom: 5px; padding-right: 15px; padding-left: 0;" valign="top"><a href="https://plus.google.com/" target="_blank"><img alt="Google+" height="32" src="https://res.cloudinary.com/shamirjamal/image/upload/v1609432486/emailbucket/googleplus2x_j84shk.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;" title="Google+" width="32"/></a></td>
  <td style="word-break: break-word; vertical-align: top; padding-bottom: 5px; padding-right: 15px; padding-left: 0;" valign="top"><a href="https://instagram.com/" target="_blank"><img alt="Instagram" height="32" src="https://res.cloudinary.com/shamirjamal/image/upload/v1609432486/emailbucket/instagram2x_chzkgu.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;" title="Instagram" width="32"/></a></td>
  <td style="word-break: break-word; vertical-align: top; padding-bottom: 5px; padding-right: 15px; padding-left: 0;" valign="top"><a href="https://www.linkedin.com/" target="_blank"><img alt="LinkedIn" height="32" src="https://res.cloudinary.com/shamirjamal/image/upload/v1609432487/emailbucket/linkedin2x_jl1chs.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;" title="LinkedIn" width="32"/></a></td>
  <td style="word-break: break-word; vertical-align: top; padding-bottom: 5px; padding-right: 15px; padding-left: 0;" valign="top"><a href="https://www.youtube.com/" target="_blank"><img alt="YouTube" height="32" src="https://res.cloudinary.com/shamirjamal/image/upload/v1609432487/emailbucket/youtube2x_jotbfe.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;" title="YouTube" width="32"/></a></td>
</tr>

</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<div style="font-size:16px;text-align:center;font-family:TimesNewRoman, Times New Roman, Times, Beskerville, Georgia, serif">
<div style="margin-top: 40px;border-top:1px dashed #D6D6D6;margin-bottom: 40px;"></div>
</div>
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Georgia, serif"><![endif]-->
<div style="color:#C0C0C0;font-family:TimesNewRoman, Times New Roman, Times, Beskerville, Georgia, serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
<div style="line-height: 1.2; font-size: 12px; font-family: TimesNewRoman, Times New Roman, Times, Beskerville, Georgia, serif; color: #C0C0C0; mso-line-height-alt: 14px;">
<p style="font-size: 12px; line-height: 1.2; text-align: center; word-break: break-word; font-family: TimesNewRoman, Times New Roman, Times, Beskerville, Georgia, serif; mso-line-height-alt: 14px; margin: 0;"><span style="color: #ffffff;">We hope you enjoyed this email. If you'd rather not receive future emails from Smart Hotel Web Services,<span style="color: #000080;"> <a data-mt-detrack-attachment-inspected="true" data-mt-detrack-inspected="true" data-saferedirecturl="https://www.google.com/url?q=https://u19199500.ct.sendgrid.net/ls/click?upn%3DFKN29UhQ0n-2BlWVxRpZH00ZM70EsX1e4DRKdjCj-2BAVTJFAdU1GIivqt7EhnWti1CsHmSF_C-2FGJcFrp5uicSo53JPxQ0y-2Bv25er6p5Ixv5oN6p4zjXD71xz0ITvtWDVd35cmoyOyjYqJJK1DdBzc78D7uk5HoZI5xY0fJvmmwqnnDSDMc-2FH8QOylX4mqMsW07LRUse52lrfwTwE6885dEt6wzTXpBWBlwyVqOZGl7JXl-2BBxzUsjhQS5e9L-2BT-2FMlNrLB6AZGgG3czCPSw1bSGFcq-2FhOfzkZBzx-2Fr2Uk92r5gW6Hx2O0-3D&amp;source=gmail&amp;ust=1608224557282000&amp;usg=AFQjCNEeGzdyaPemztEdn_pC9Ulix4BSOw" href="https://u19199500.ct.sendgrid.net/ls/click?upn=FKN29UhQ0n-2BlWVxRpZH00ZM70EsX1e4DRKdjCj-2BAVTJFAdU1GIivqt7EhnWti1CsHmSF_C-2FGJcFrp5uicSo53JPxQ0y-2Bv25er6p5Ixv5oN6p4zjXD71xz0ITvtWDVd35cmoyOyjYqJJK1DdBzc78D7uk5HoZI5xY0fJvmmwqnnDSDMc-2FH8QOylX4mqMsW07LRUse52lrfwTwE6885dEt6wzTXpBWBlwyVqOZGl7JXl-2BBxzUsjhQS5e9L-2BT-2FMlNrLB6AZGgG3czCPSw1bSGFcq-2FhOfzkZBzx-2Fr2Uk92r5gW6Hx2O0-3D" rel="noopener" style="text-decoration: underline; color: #000080;" target="_blank">unsubscribe here</a>.</span></span><br/><span style="color: #ffffff;">Smart Hotel Web Services, is a trademark of Zaam Technologies and its affiliates.</span></p>
<p style="font-size: 12px; line-height: 1.2; text-align: center; word-break: break-word; font-family: TimesNewRoman, Times New Roman, Times, Beskerville, Georgia, serif; mso-line-height-alt: 14px; margin: 0;"><span style="color: #ffffff;">Zaam Technologies is a registered trademark of Zaam Technologies.</span></p>
<p style="font-size: 12px; line-height: 1.2; text-align: center; word-break: break-word; font-family: TimesNewRoman, Times New Roman, Times, Beskerville, Georgia, serif; mso-line-height-alt: 14px; margin: 0;"><br/><span style="color: #ffffff;">This message was produced and distributed by Zaam Technologies and its affiliates, 11011 Nairobi 00100 GPO, Nairobi, Kenya.</span><br/><span style="color: #ffffff;">© 2020, Zaam Technologies or its affiliates. All rights reserved.</span></p>
<p style="font-size: 12px; line-height: 1.2; text-align: center; word-break: break-word; font-family: TimesNewRoman, Times New Roman, Times, Beskerville, Georgia, serif; mso-line-height-alt: 14px; margin: 0;"><span style="color: #ffffff;">Read our <span style="color: #000080;"><a data-mt-detrack-attachment-inspected="true" data-mt-detrack-inspected="true" data-saferedirecturl="https://www.google.com/url?q=https://u19199500.ct.sendgrid.net/ls/click?upn%3DFKN29UhQ0n-2BlWVxRpZH00ZM70EsX1e4DRKdjCj-2BAVTJFAdU1GIivqt7EhnWti1CsG7II_C-2FGJcFrp5uicSo53JPxQ0y-2Bv25er6p5Ixv5oN6p4zjXD71xz0ITvtWDVd35cmoyOyjYqJJK1DdBzc78D7uk5HnJQ-2B7aFqNhMj44R-2FyvGriicjrjIChCm6mNi8agIMQF01x14YKau7ulRDqT7jJj9GTCRT-2F2ixUFEv3cX9U5Ls1a5BND9NZNRKp6QRknoH1O3In4m21Phu8mvcyqwnPPfYLtoWEQ2tftBEaTrJPoJLR8-3D&amp;source=gmail&amp;ust=1608224557283000&amp;usg=AFQjCNHjF_mV8HZnWfI3AVU_ydSVPYSjcw" href="https://u19199500.ct.sendgrid.net/ls/click?upn=FKN29UhQ0n-2BlWVxRpZH00ZM70EsX1e4DRKdjCj-2BAVTJFAdU1GIivqt7EhnWti1CsG7II_C-2FGJcFrp5uicSo53JPxQ0y-2Bv25er6p5Ixv5oN6p4zjXD71xz0ITvtWDVd35cmoyOyjYqJJK1DdBzc78D7uk5HnJQ-2B7aFqNhMj44R-2FyvGriicjrjIChCm6mNi8agIMQF01x14YKau7ulRDqT7jJj9GTCRT-2F2ixUFEv3cX9U5Ls1a5BND9NZNRKp6QRknoH1O3In4m21Phu8mvcyqwnPPfYLtoWEQ2tftBEaTrJPoJLR8-3D" rel="noopener" style="text-decoration: underline; color: #000080;" target="_blank">Privacy Policy</a></span></span></p>
</div>
</div>

<!--[if mso]></td></tr></table><![endif]-->
<div style="font-size:16px;text-align:center;font-family:TimesNewRoman, Times New Roman, Times, Beskerville, Georgia, serif">
<div style="height-top: 20px;"> </div>
</div>
<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
</td>
</tr>
</tbody>
</table>
<!--[if (IE)]></div><![endif]-->
</body>
</html>
`};
const send_password_reset_code = ({
  one_time_password
}) => {
  return `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
<head>
<!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
<meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
<meta content="width=device-width" name="viewport"/>
<!--[if !mso]><!-->
<meta content="IE=edge" http-equiv="X-UA-Compatible"/>
<!--<![endif]-->
<title></title>
<!--[if !mso]><!-->
<link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet" type="text/css"/>
<link href="https://fonts.googleapis.com/css?family=Abril+Fatface" rel="stylesheet" type="text/css"/>
<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css"/>
<!--<![endif]-->
<style type="text/css">
body {
  margin: 0;
  padding: 0;
}
table,
td,
tr {
  vertical-align: top;
  border-collapse: collapse;
}
* {
  line-height: inherit;
}
a[x-apple-data-detectors=true] {
  color: inherit !important;
  text-decoration: none !important;
}
</style>
<style id="media-query" type="text/css">
@media (max-width: 750px) {
  .block-grid,
  .col {
    min-width: 320px !important;
    max-width: 100% !important;
    display: block !important;
  }
  .block-grid {
    width: 100% !important;
  }
  .col {
    width: 100% !important;
  }
  .col_cont {
    margin: 0 auto;
  }
  img.fullwidth,
  img.fullwidthOnMobile {
    max-width: 100% !important;
  }
  .no-stack .col {
    min-width: 0 !important;
    display: table-cell !important;
  }
  .no-stack.two-up .col {
    width: 50% !important;
  }
  .no-stack .col.num2 {
    width: 16.6% !important;
  }
  .no-stack .col.num3 {
    width: 25% !important;
  }
  .no-stack .col.num4 {
    width: 33% !important;
  }
  .no-stack .col.num5 {
    width: 41.6% !important;
  }
  .no-stack .col.num6 {
    width: 50% !important;
  }
  .no-stack .col.num7 {
    width: 58.3% !important;
  }
  .no-stack .col.num8 {
    width: 66.6% !important;
  }
  .no-stack .col.num9 {
    width: 75% !important;
  }
  .no-stack .col.num10 {
    width: 83.3% !important;
  }

  .video-block {
    max-width: none !important;
  }
  .mobile_hide {
    min-height: 0px;
    max-height: 0px;
    max-width: 0px;
    display: none;
    overflow: hidden;
    font-size: 0px;
  }
  .desktop_hide {
    display: block !important;
    max-height: none !important;
  }
}
</style>
</head>

<body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #ffffff;">
<!--[if IE]><div class="ie-browser"><![endif]-->
<table bgcolor="#ffffff" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="table-layout: fixed; vertical-align: top; min-width: 320px; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; width: 100%;" valign="top" width="100%">

<tbody>
<tr style="vertical-align: top;" valign="top">
<td style="word-break: break-word; vertical-align: top;" valign="top">

<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#ffffff"><![endif]-->
<div style="background-image:url('https://res.cloudinary.com/shamirjamal/image/upload/v1609432487/emailbucket/c2dc29af-0ee6-43eb-b6cc-ba9494dcab0f_fxsa7h.jpg');background-position:center top;background-repeat:no-repeat;background-color:#425bd9;">
<div class="block-grid" style="min-width: 320px; max-width: 730px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">
<div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-image:url('https://res.cloudinary.com/shamirjamal/image/upload/v1609432487/emailbucket/c2dc29af-0ee6-43eb-b6cc-ba9494dcab0f_fxsa7h.jpg');background-position:center top;background-repeat:no-repeat;background-color:#425bd9;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:730px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="730" style="background-color:transparent;width:730px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
<div class="col num12" style="min-width: 320px; max-width: 730px; display: table-cell; vertical-align: top; width: 730px;">
<div class="col_cont" style="width:100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
<!--<![endif]-->

<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 15px; padding-top: 15px; padding-bottom: 15px; font-family: 'Times New Roman', Georgia, serif"><![endif]-->
<div style="color:#555555;font-family:TimesNewRoman, 'Times New Roman', Times, Beskerville, Georgia, serif;line-height:1.2;padding-top:15px;padding-right:20px;padding-bottom:15px;padding-left:15px;">
<div style="line-height: 1.2; font-size: 12px; font-family: TimesNewRoman, 'Times New Roman', Times, Beskerville, Georgia, serif; color: #555555; mso-line-height-alt: 14px;">
<p style="font-size: 30px; line-height: 1.2; word-break: break-word; text-align: right; font-family: TimesNewRoman, 'Times New Roman', Times, Beskerville, Georgia, serif; mso-line-height-alt: 36px; margin: 0;"><span style="font-size: 30px; color: #ffffff;"><strong>Password assistance</strong></span></p>
</div>
</div>
<!--[if mso]></td></tr></table><![endif]-->
<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->

</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>

<div style="background-color:transparent;">
<div class="block-grid" style="min-width: 320px; max-width: 730px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #ffffff;">
<div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:730px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="730" style="background-color:#ffffff;width:730px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 10px; padding-top:15px; padding-bottom:5px;"><![endif]-->
<div class="col num12" style="min-width: 320px; max-width: 730px; display: table-cell; vertical-align: top; width: 730px;">
<div class="col_cont" style="width:100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:15px; padding-bottom:5px; padding-right: 0px; padding-left: 10px;">
<!--<![endif]-->

<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top: 0px; padding-bottom: 0px; font-family: Tahoma, Verdana, sans-serif"><![endif]-->
<div style="color:#555555;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;line-height:1.5;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
<div style="line-height: 1.5; font-size: 12px; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; color: #555555; mso-line-height-alt: 18px;">
<p style="font-size: 16px; line-height: 1.5; word-break: break-word; text-align: left; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 24px; margin: 0;"><span style="font-size: 16px;">To authenticate, please use the following One Time Password (OTP):</span></p>
<p style="font-size: 14px; line-height: 1.5; word-break: break-word; text-align: left; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 21px; margin: 0;"> </p>
<p style="font-size: 20px; line-height: 1.5; word-break: break-word; text-align: left; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 30px; margin: 0;"><span style="font-size: 20px;"><strong><span style="">${one_time_password}</span></strong></span></p>
<p style="font-size: 14px; line-height: 1.5; word-break: break-word; text-align: left; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 21px; margin: 0;"> </p>
<p style="font-size: 16px; line-height: 1.5; word-break: break-word; text-align: left; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 24px; margin: 0;"><span style="font-size: 16px;">Do not share this OTP with anyone. Zaam Technologies takes your account security very seriously. Zaam Technologies Customer Service will never ask you to disclose or verify your Smart Hotel account password, OTP, credit card, or banking account number. If you receive a suspicious email with a link to update your account information, do not click on the link—instead, report the email to Zaam Technologies for investigation.</span></p>
<p style="font-size: 14px; line-height: 1.5; word-break: break-word; text-align: left; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 21px; margin: 0;"> </p>
<p style="font-size: 16px; line-height: 1.5; word-break: break-word; text-align: left; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 24px; margin: 0;"><span style="font-size: 16px;">Thank you for transacting with us. We are here to cater for your hospitality needs.</span></p>
</div>
</div>
<!--[if mso]></td></tr></table><![endif]-->
<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->

</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>
<div style="background-color:transparent;">
<div class="block-grid" style="min-width: 320px; max-width: 730px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #ffffff;">
<div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:730px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="730" style="background-color:#ffffff;width:730px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 10px; padding-top:15px; padding-bottom:5px;"><![endif]-->
<div class="col num12" style="min-width: 320px; max-width: 730px; display: table-cell; vertical-align: top; width: 730px;">
<div class="col_cont" style="width:100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:15px; padding-bottom:5px; padding-right: 0px; padding-left: 10px;">
<!--<![endif]-->
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top: 0px; padding-bottom: 0px; font-family: Tahoma, Verdana, sans-serif"><![endif]-->
<!--[if mso]></td></tr></table><![endif]-->
<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->

</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>
<div style="background-color:#15080f;">
<div class="block-grid" style="min-width: 320px; max-width: 730px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">
<div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#15080f;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:730px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="730" style="background-color:transparent;width:730px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;background-color:#010101;"><![endif]-->
<div class="col num12" style="min-width: 320px; max-width: 730px; display: table-cell; vertical-align: top; background-color: #010101; width: 730px;">
<div class="col_cont" style="width:100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
<!--<![endif]-->

<!--[if (mso)|(IE)]><table width="730" align="center" cellpadding="0" cellspacing="0" role="presentation"><tr><td><![endif]-->
<div align="center" class="video-block" style="max-width:730px;min-width:320px;padding-top:0px;padding-bottom:0px;padding-left:0px;padding-right:0px;">
<!--[if !vml]><!--><a class="video-preview" href="https://www.youtube.com/watch?v=tri7gjlmfdk" style="background-color:#5b5f66;background-image:radial-gradient(circle at center, #5b5f66, #1d1f21);display:block;text-decoration:none;" target="_blank">
<div>
<table background="https://img.youtube.com/vi/tri7gjlmfdk/maxresdefault.jpg" border="0" cellpadding="0" cellspacing="0" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-image: url(https://img.youtube.com/vi/tri7gjlmfdk/maxresdefault.jpg); background-size: cover; min-height: 180px; min-width: 320px;" valign="top" width="100%">
<tr style="vertical-align: top;" valign="top">
<td style="word-break: break-word; vertical-align: top;" valign="top" width="25%"><img alt="" border="0" src="https://beefree.io/img-host/video_ratio_16-9.gif" style="text-decoration: none; -ms-interpolation-mode: bicubic; border: 0; height: auto; opacity: 0; visibility: hidden; display: block;" width="100%"/></td>
<td align="center" style="word-break: break-word; vertical-align: middle;" valign="middle" width="50%">
<div class="play-button_outer" style="display:inline-block;vertical-align:middle;background-color:#ffffff;border:3px solid #ffffff;height:59px;width:59px;border-radius:100%;">
<div style="padding:14.75px 22.69230769230769px;">
<div class="play-button_inner" style="border-style:solid;border-width:15px 0 15px 20px;display:block;font-size:0;height:0;width:0;border-color:transparent transparent transparent #000000;"> </div>
</div>
</div>
</td>
<td style="word-break: break-word; vertical-align: top;" valign="top" width="25%"> </td>
</tr>
</table>
</div>
</a>
<!--<![endif]-->

<!--[if vml]>
<v:group xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" coordsize="730,411" coordorigin="0,0" href="https://www.youtube.com/watch?v=tri7gjlmfdk" style="width:730px;height:411px;">
<v:rect fill="t" stroked="f" style="position:absolute;width:730;height:411;">
<v:fill src="https://img.youtube.com/vi/tri7gjlmfdk/maxresdefault.jpg" type="frame"/>
</v:rect>
<v:oval fill="t" strokecolor="#ffffff" strokeweight="3px" style="position:absolute;left:336;top:176;width:59;height:59">
<v:fill color="#ffffff" opacity="100%" />
</v:oval>
<v:shape coordsize="24,32" path="m,l,32,24,16,xe" fillcolor="#000000" stroked="f" style="position:absolute;left:357;top:191;width:21;height:30;" />
</v:group>
<![endif]-->

</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->

</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>

<div style="background-color:#0068a5;">
<div class="block-grid" style="min-width: 320px; max-width: 730px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">
<div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#0068a5;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:730px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="730" style="background-color:transparent;width:730px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
<div class="col num12" style="min-width: 320px; max-width: 730px; display: table-cell; vertical-align: top; width: 730px;">
<div class="col_cont" style="width:100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
<!--<![endif]-->
<div style="font-size:16px;text-align:center;font-family:TimesNewRoman, Times New Roman, Times, Beskerville, Georgia, serif">
<div style="height:30px;"> </div>
</div>

<table cellpadding="0" cellspacing="0" class="social_icons" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td style="word-break: break-word; vertical-align: top; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">
<table align="center" cellpadding="0" cellspacing="0" class="social_table" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-tspace: 0; mso-table-rspace: 0; mso-table-bspace: 0; mso-table-lspace: 0;" valign="top">
<tbody>
  <tr align="center" style="vertical-align: top; display: inline-block; text-align: center;" valign="top">
  <td style="word-break: break-word; vertical-align: top; padding-bottom: 5px; padding-right: 15px; padding-left: 0;" valign="top"><a href="https://www.facebook.com/" target="_blank"><img alt="Facebook" height="32" src="https://res.cloudinary.com/shamirjamal/image/upload/v1609432486/emailbucket/facebook2x_icqsjo.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;" title="Facebook" width="32"/></a></td>
  <td style="word-break: break-word; vertical-align: top; padding-bottom: 5px; padding-right: 15px; padding-left: 0;" valign="top"><a href="https://twitter.com/" target="_blank"><img alt="Twitter" height="32" src="https://res.cloudinary.com/shamirjamal/image/upload/v1609432487/emailbucket/twitter2x_p8seny.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;" title="Twitter" width="32"/></a></td>
  <td style="word-break: break-word; vertical-align: top; padding-bottom: 5px; padding-right: 15px; padding-left: 0;" valign="top"><a href="https://plus.google.com/" target="_blank"><img alt="Google+" height="32" src="https://res.cloudinary.com/shamirjamal/image/upload/v1609432486/emailbucket/googleplus2x_j84shk.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;" title="Google+" width="32"/></a></td>
  <td style="word-break: break-word; vertical-align: top; padding-bottom: 5px; padding-right: 15px; padding-left: 0;" valign="top"><a href="https://instagram.com/" target="_blank"><img alt="Instagram" height="32" src="https://res.cloudinary.com/shamirjamal/image/upload/v1609432486/emailbucket/instagram2x_chzkgu.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;" title="Instagram" width="32"/></a></td>
  <td style="word-break: break-word; vertical-align: top; padding-bottom: 5px; padding-right: 15px; padding-left: 0;" valign="top"><a href="https://www.linkedin.com/" target="_blank"><img alt="LinkedIn" height="32" src="https://res.cloudinary.com/shamirjamal/image/upload/v1609432487/emailbucket/linkedin2x_jl1chs.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;" title="LinkedIn" width="32"/></a></td>
  <td style="word-break: break-word; vertical-align: top; padding-bottom: 5px; padding-right: 15px; padding-left: 0;" valign="top"><a href="https://www.youtube.com/" target="_blank"><img alt="YouTube" height="32" src="https://res.cloudinary.com/shamirjamal/image/upload/v1609432487/emailbucket/youtube2x_jotbfe.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;" title="YouTube" width="32"/></a></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<div style="font-size:16px;text-align:center;font-family:TimesNewRoman, Times New Roman, Times, Beskerville, Georgia, serif">
<div style="margin-top: 40px;border-top:1px dashed #D6D6D6;margin-bottom: 40px;"></div>
</div>
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Georgia, serif"><![endif]-->
<div style="color:#C0C0C0;font-family:TimesNewRoman, Times New Roman, Times, Beskerville, Georgia, serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
<div style="line-height: 1.2; font-size: 12px; font-family: TimesNewRoman, Times New Roman, Times, Beskerville, Georgia, serif; color: #C0C0C0; mso-line-height-alt: 14px;">
<p style="font-size: 12px; line-height: 1.2; text-align: center; word-break: break-word; font-family: TimesNewRoman, Times New Roman, Times, Beskerville, Georgia, serif; mso-line-height-alt: 14px; margin: 0;"><span style="color: #ffffff;">We hope you enjoyed this email. If you'd rather not receive future emails from Smart Hotel Web Services,<span style="color: #000080;"> <a data-mt-detrack-attachment-inspected="true" data-mt-detrack-inspected="true" data-saferedirecturl="https://www.google.com/url?q=https://u19199500.ct.sendgrid.net/ls/click?upn%3DFKN29UhQ0n-2BlWVxRpZH00ZM70EsX1e4DRKdjCj-2BAVTJFAdU1GIivqt7EhnWti1CsHmSF_C-2FGJcFrp5uicSo53JPxQ0y-2Bv25er6p5Ixv5oN6p4zjXD71xz0ITvtWDVd35cmoyOyjYqJJK1DdBzc78D7uk5HoZI5xY0fJvmmwqnnDSDMc-2FH8QOylX4mqMsW07LRUse52lrfwTwE6885dEt6wzTXpBWBlwyVqOZGl7JXl-2BBxzUsjhQS5e9L-2BT-2FMlNrLB6AZGgG3czCPSw1bSGFcq-2FhOfzkZBzx-2Fr2Uk92r5gW6Hx2O0-3D&amp;source=gmail&amp;ust=1608224557282000&amp;usg=AFQjCNEeGzdyaPemztEdn_pC9Ulix4BSOw" href="https://u19199500.ct.sendgrid.net/ls/click?upn=FKN29UhQ0n-2BlWVxRpZH00ZM70EsX1e4DRKdjCj-2BAVTJFAdU1GIivqt7EhnWti1CsHmSF_C-2FGJcFrp5uicSo53JPxQ0y-2Bv25er6p5Ixv5oN6p4zjXD71xz0ITvtWDVd35cmoyOyjYqJJK1DdBzc78D7uk5HoZI5xY0fJvmmwqnnDSDMc-2FH8QOylX4mqMsW07LRUse52lrfwTwE6885dEt6wzTXpBWBlwyVqOZGl7JXl-2BBxzUsjhQS5e9L-2BT-2FMlNrLB6AZGgG3czCPSw1bSGFcq-2FhOfzkZBzx-2Fr2Uk92r5gW6Hx2O0-3D" rel="noopener" style="text-decoration: underline; color: #000080;" target="_blank">unsubscribe here</a>.</span></span><br/><span style="color: #ffffff;">Smart Hotel Web Services, is a trademark of Zaam Technologies and its affiliates.</span></p>
<p style="font-size: 12px; line-height: 1.2; text-align: center; word-break: break-word; font-family: TimesNewRoman, Times New Roman, Times, Beskerville, Georgia, serif; mso-line-height-alt: 14px; margin: 0;"><span style="color: #ffffff;">Zaam Technologies is a registered trademark of Zaam Technologies.</span></p>
<p style="font-size: 12px; line-height: 1.2; text-align: center; word-break: break-word; font-family: TimesNewRoman, Times New Roman, Times, Beskerville, Georgia, serif; mso-line-height-alt: 14px; margin: 0;"><br/><span style="color: #ffffff;">This message was produced and distributed by Zaam Technologies and its affiliates, 11011 Nairobi 00100 GPO, Nairobi, Kenya.</span><br/><span style="color: #ffffff;">© 2020, Zaam Technologies or its affiliates. All rights reserved.</span></p>
<p style="font-size: 12px; line-height: 1.2; text-align: center; word-break: break-word; font-family: TimesNewRoman, Times New Roman, Times, Beskerville, Georgia, serif; mso-line-height-alt: 14px; margin: 0;"><span style="color: #ffffff;">Read our <span style="color: #000080;"><a data-mt-detrack-attachment-inspected="true" data-mt-detrack-inspected="true" data-saferedirecturl="https://www.google.com/url?q=https://u19199500.ct.sendgrid.net/ls/click?upn%3DFKN29UhQ0n-2BlWVxRpZH00ZM70EsX1e4DRKdjCj-2BAVTJFAdU1GIivqt7EhnWti1CsG7II_C-2FGJcFrp5uicSo53JPxQ0y-2Bv25er6p5Ixv5oN6p4zjXD71xz0ITvtWDVd35cmoyOyjYqJJK1DdBzc78D7uk5HnJQ-2B7aFqNhMj44R-2FyvGriicjrjIChCm6mNi8agIMQF01x14YKau7ulRDqT7jJj9GTCRT-2F2ixUFEv3cX9U5Ls1a5BND9NZNRKp6QRknoH1O3In4m21Phu8mvcyqwnPPfYLtoWEQ2tftBEaTrJPoJLR8-3D&amp;source=gmail&amp;ust=1608224557283000&amp;usg=AFQjCNHjF_mV8HZnWfI3AVU_ydSVPYSjcw" href="https://u19199500.ct.sendgrid.net/ls/click?upn=FKN29UhQ0n-2BlWVxRpZH00ZM70EsX1e4DRKdjCj-2BAVTJFAdU1GIivqt7EhnWti1CsG7II_C-2FGJcFrp5uicSo53JPxQ0y-2Bv25er6p5Ixv5oN6p4zjXD71xz0ITvtWDVd35cmoyOyjYqJJK1DdBzc78D7uk5HnJQ-2B7aFqNhMj44R-2FyvGriicjrjIChCm6mNi8agIMQF01x14YKau7ulRDqT7jJj9GTCRT-2F2ixUFEv3cX9U5Ls1a5BND9NZNRKp6QRknoH1O3In4m21Phu8mvcyqwnPPfYLtoWEQ2tftBEaTrJPoJLR8-3D" rel="noopener" style="text-decoration: underline; color: #000080;" target="_blank">Privacy Policy</a></span></span></p>
</div>
</div>

<!--[if mso]></td></tr></table><![endif]-->
<div style="font-size:16px;text-align:center;font-family:TimesNewRoman, Times New Roman, Times, Beskerville, Georgia, serif">
<div style="height-top: 20px;"> </div>
</div>
<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
</td>
</tr>
</tbody>
</table>
<!--[if (IE)]></div><![endif]-->
</body>
</html>
`};
const send_welcome_email = ({
  sh_full_name
}) => {
  return `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
<head>
<!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
<meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
<meta content="width=device-width" name="viewport"/>
<!--[if !mso]><!-->
<meta content="IE=edge" http-equiv="X-UA-Compatible"/>
<!--<![endif]-->
<title></title>
<!--[if !mso]><!-->
<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css"/>
<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css"/>
<!--<![endif]-->
<style type="text/css">
		body {
			margin: 0;
			padding: 0;
		}

		table,
		td,
		tr {
			vertical-align: top;
			border-collapse: collapse;
		}

		* {
			line-height: inherit;
		}

		a[x-apple-data-detectors=true] {
			color: inherit !important;
			text-decoration: none !important;
		}
	</style>
<style id="media-query" type="text/css">
		@media (max-width: 720px) {

			.block-grid,
			.col {
				min-width: 320px !important;
				max-width: 100% !important;
				display: block !important;
			}

			.block-grid {
				width: 100% !important;
			}

			.col {
				width: 100% !important;
			}

			.col_cont {
				margin: 0 auto;
			}

			img.fullwidth,
			img.fullwidthOnMobile {
				max-width: 100% !important;
			}

			.no-stack .col {
				min-width: 0 !important;
				display: table-cell !important;
			}

			.no-stack.two-up .col {
				width: 50% !important;
			}

			.no-stack .col.num2 {
				width: 16.6% !important;
			}

			.no-stack .col.num3 {
				width: 25% !important;
			}

			.no-stack .col.num4 {
				width: 33% !important;
			}

			.no-stack .col.num5 {
				width: 41.6% !important;
			}

			.no-stack .col.num6 {
				width: 50% !important;
			}

			.no-stack .col.num7 {
				width: 58.3% !important;
			}

			.no-stack .col.num8 {
				width: 66.6% !important;
			}

			.no-stack .col.num9 {
				width: 75% !important;
			}

			.no-stack .col.num10 {
				width: 83.3% !important;
			}

			.video-block {
				max-width: none !important;
			}

			.mobile_hide {
				min-height: 0px;
				max-height: 0px;
				max-width: 0px;
				display: none;
				overflow: hidden;
				font-size: 0px;
			}

			.desktop_hide {
				display: block !important;
				max-height: none !important;
			}
		}
	</style>
</head>
<body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #FFFFFF;">
<!--[if IE]><div class="ie-browser"><![endif]-->
<table bgcolor="#FFFFFF" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="table-layout: fixed; vertical-align: top; min-width: 320px; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF; width: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td style="word-break: break-word; vertical-align: top;" valign="top">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#FFFFFF"><![endif]-->
<div style="background-image:url('https://res.cloudinary.com/shamirjamal/image/upload/v1609432486/emailbucket/bg_wave_1_yislmt.png');background-position:top center;background-repeat:repeat;background-color:#F4F4F4;">
<div class="block-grid" style="min-width: 320px; max-width: 700px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">
<div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-image:url('https://res.cloudinary.com/shamirjamal/image/upload/v1609432486/emailbucket/bg_wave_1_yislmt.png');background-position:top center;background-repeat:repeat;background-color:#F4F4F4;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="700" style="background-color:transparent;width:700px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
<div class="col num12" style="min-width: 320px; max-width: 700px; display: table-cell; vertical-align: top; width: 700px;">
<div class="col_cont" style="width:100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
<!--<![endif]-->
<table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" height="70" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 70px; width: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td height="70" style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>
<div style="background-color:#0068a5;">
<div class="block-grid" style="min-width: 320px; max-width: 700px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">
<div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#0068a5;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="700" style="background-color:transparent;width:700px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
<div class="col num12" style="min-width: 320px; max-width: 700px; display: table-cell; vertical-align: top; width: 700px;">
<div class="col_cont" style="width:100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
<!--<![endif]-->
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top: 0px; padding-bottom: 0px; font-family: Arial, sans-serif"><![endif]-->
<div style="color:#393d47;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;line-height:1.2;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;">
<div style="line-height: 1.2; font-size: 12px; color: #393d47; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; mso-line-height-alt: 14px;">
<p style="font-size: 14px; line-height: 1.2; word-break: break-word; mso-line-height-alt: 17px; margin: 0;"> </p>
<p style="font-size: 14px; line-height: 1.2; word-break: break-word; mso-line-height-alt: 17px; margin: 0;"><span style="color: #ffffff;"><strong><span style="font-size: 46px;">SMART HOTEL</span></strong></span></p>
<p style="font-size: 14px; line-height: 1.2; word-break: break-word; mso-line-height-alt: 17px; margin: 0;"> </p>
</div>
</div>
<!--[if mso]></td></tr></table><![endif]-->
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top: 0px; padding-bottom: 0px; font-family: Arial, sans-serif"><![endif]-->
<!--[if mso]></td></tr></table><![endif]-->
<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>
<div style="background-image:url('https://res.cloudinary.com/shamirjamal/image/upload/v1609432486/emailbucket/bg_wave_1_yislmt.png');background-position:top center;background-repeat:repeat;background-color:#F4F4F4;">
<div class="block-grid" style="min-width: 320px; max-width: 700px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">
<div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-image:url('https://res.cloudinary.com/shamirjamal/image/upload/v1609432486/emailbucket/bg_wave_1_yislmt.png');background-position:top center;background-repeat:repeat;background-color:#F4F4F4;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="700" style="background-color:transparent;width:700px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
<div class="col num12" style="min-width: 320px; max-width: 700px; display: table-cell; vertical-align: top; width: 700px;">
<div class="col_cont" style="width:100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
<!--<![endif]-->
<table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" height="70" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 70px; width: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td height="70" style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>
<div style="background-color:#F4F4F4;">
<div class="block-grid" style="min-width: 320px; max-width: 700px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">
<div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#F4F4F4;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="700" style="background-color:transparent;width:700px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
<div class="col num12" style="min-width: 320px; max-width: 700px; display: table-cell; vertical-align: top; width: 700px;">
<div class="col_cont" style="width:100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
<!--<![endif]-->
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 5px; padding-left: 5px; padding-top: 5px; padding-bottom: 5px; font-family: 'Trebuchet MS', Tahoma, sans-serif"><![endif]-->
<div style="color:#555555;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;line-height:1.2;padding-top:5px;padding-right:5px;padding-bottom:5px;padding-left:5px;">
<div style="font-size: 12px; line-height: 1.2; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; color: #555555; mso-line-height-alt: 14px;">
<p style="font-size: 14px; line-height: 1.2; word-break: break-word; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 17px; margin: 0;"><strong><span style="font-size: 46px;">Welcome, <span style="color: #3d3bee; font-size: 46px;">${sh_full_name}</span>!</span></strong></p>
</div>
</div>
<!--[if mso]></td></tr></table><![endif]-->
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 5px; padding-left: 5px; padding-top: 5px; padding-bottom: 5px; font-family: Arial, sans-serif"><![endif]-->
<div style="color:#7C7C7C;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;line-height:1.5;padding-top:5px;padding-right:5px;padding-bottom:5px;padding-left:5px;">
<div style="font-size: 12px; line-height: 1.5; color: #7C7C7C; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; mso-line-height-alt: 18px;">
<p style="font-size: 22px; line-height: 1.5; word-break: break-word; mso-line-height-alt: 33px; margin: 0;"><span style="font-size: 22px;">Thank you for creating a Smart Hotel account.</span></p>
<p style="font-size: 12px; line-height: 1.5; word-break: break-word; mso-line-height-alt: 18px; margin: 0;"> </p>
<p style="font-size: 12px; line-height: 1.5; word-break: break-word; mso-line-height-alt: 18px; margin: 0;"> </p>
<p style="font-size: 22px; line-height: 1.5; word-break: break-word; mso-line-height-alt: 33px; margin: 0;"><span style="font-size: 22px;">Welcome to the Zaam Technologies community!</span></p>
<p style="font-size: 12px; line-height: 1.5; word-break: break-word; mso-line-height-alt: 18px; margin: 0;"> </p>
<p style="font-size: 12px; line-height: 1.5; word-break: break-word; mso-line-height-alt: 18px; margin: 0;"> </p>
<p style="font-size: 22px; line-height: 1.5; word-break: break-word; mso-line-height-alt: 33px; margin: 0;"><span style="font-size: 22px;">—The Zaam Technologies Group</span></p>
<p style="font-size: 12px; line-height: 1.5; word-break: break-word; mso-line-height-alt: 18px; margin: 0;"> </p>
<p style="font-size: 12px; line-height: 1.5; word-break: break-word; mso-line-height-alt: 18px; margin: 0;"> </p>
</div>
</div>
<!--[if mso]></td></tr></table><![endif]-->
<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>
<div style="background-image:url('https://res.cloudinary.com/shamirjamal/image/upload/v1609432486/emailbucket/bg_wave_2_dkmtek.png');background-position:top center;background-repeat:repeat;background-color:#F4F4F4;">
<div class="block-grid" style="min-width: 320px; max-width: 700px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">
<div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-image:url('https://res.cloudinary.com/shamirjamal/image/upload/v1609432486/emailbucket/bg_wave_2_dkmtek.png');background-position:top center;background-repeat:repeat;background-color:#F4F4F4;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="700" style="background-color:transparent;width:700px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
<div class="col num12" style="min-width: 320px; max-width: 700px; display: table-cell; vertical-align: top; width: 700px;">
<div class="col_cont" style="width:100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
<!--<![endif]-->
<table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" height="70" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 70px; width: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td height="70" style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>
<div style="background-color:#0068a5;">
<div class="block-grid" style="min-width: 320px; max-width: 700px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #0068a5;">
<div style="border-collapse: collapse;display: table;width: 100%;background-color:#0068a5;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#0068a5;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px"><tr class="layout-full-width" style="background-color:#0068a5"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="700" style="background-color:#0068a5;width:700px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
<div class="col num12" style="min-width: 320px; max-width: 700px; display: table-cell; vertical-align: top; width: 700px;">
<div class="col_cont" style="width:100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
<!--<![endif]-->
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 5px; padding-left: 5px; padding-top: 5px; padding-bottom: 5px; font-family: Arial, sans-serif"><![endif]-->
<div style="color:#ffffff;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;line-height:1.5;padding-top:5px;padding-right:5px;padding-bottom:5px;padding-left:5px;">
<div style="font-size: 12px; line-height: 1.5; color: #ffffff; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; mso-line-height-alt: 18px;">
<p style="text-align: center; line-height: 1.5; word-break: break-word; mso-line-height-alt: 18px; margin: 0;">We hope you enjoyed this email. If you'd rather not receive future emails from Smart Hotel Web Services, <span style="color: #0000ff;"><a data-mt-detrack-attachment-inspected="true" data-mt-detrack-inspected="true" data-saferedirecturl="https://www.google.com/url?q=https://u19199500.ct.sendgrid.net/ls/click?upn%3DFKN29UhQ0n-2BlWVxRpZH00Vq4fSA1xYzYLTi9ro1aOC6-2Fidrw2FUbu3KBeztPqSAQfkU1nMjqbRJA2L-2F1-2Fl429aTIzTluSGOaZ5fkXx3ZuVLNYPaXmc15BoT5Qz5uuj-2FDz-2Fb5X-2FhIAq1WHIVMnidN1M27MOvh-2B8GPWrUeCT3NYygPHDoaX7uW-2BvZ-2BO3UyN4cC2y6hKxSwJ9oy1jFbVsgXFA4etVGI2un-2BrCqRLWjg7MHexQorvuPyz0jqjmf2IBhjbWvtZrswnEu1ofb8ZlZLv9lv91GhRcVcAhpff-2FksmmgLTxHrYo5lfBFYjV-2Fah-2Bw1TH-2Bv4E-2BpHL-2BOQIDypU4V7IhmpAHJp8leL2FczEUmDyyqGBOks-2F-2BRvYh4aArlL9QlNYiiFWHgVd09sQJMJcrm-2FdTNxXPJ91zIRuZrFtY58-2BiDlwfQ4xrjOMwcig6sFzCwack-2BOL2T12s3tZeLJb4iCRQe6uOi-2Fi2cz0biiO2Z49nazCEQIU4KduwIyW9XVkeHySOt_dFJUp77814yNLkq7dpsWkEzxvMJV9snQwTy3GMhPrPANRF0tKgRtVSGnSOpZ9Jcp0nftgnwsUvt8tg9E3FRxN3Pz685TaAU-2BWYOVdBScJmWzGCIV3iBaa8ipzXf-2Fxu4CYRGmJfnZ7L-2BTCOfg9P35LalTELjpohVVuh-2Bd7pkmgzeCmzX9l4Ftkmsm3dotugHcCIOY5tdQseIzWtGuXthkmJEX9unlEfU6s5xiNAaWIII-3D&amp;source=gmail&amp;ust=1608829593430000&amp;usg=AFQjCNEG0-Cqh7YNag7vi33ENaATk6mvHQ" href="https://u19199500.ct.sendgrid.net/ls/click?upn=FKN29UhQ0n-2BlWVxRpZH00Vq4fSA1xYzYLTi9ro1aOC6-2Fidrw2FUbu3KBeztPqSAQfkU1nMjqbRJA2L-2F1-2Fl429aTIzTluSGOaZ5fkXx3ZuVLNYPaXmc15BoT5Qz5uuj-2FDz-2Fb5X-2FhIAq1WHIVMnidN1M27MOvh-2B8GPWrUeCT3NYygPHDoaX7uW-2BvZ-2BO3UyN4cC2y6hKxSwJ9oy1jFbVsgXFA4etVGI2un-2BrCqRLWjg7MHexQorvuPyz0jqjmf2IBhjbWvtZrswnEu1ofb8ZlZLv9lv91GhRcVcAhpff-2FksmmgLTxHrYo5lfBFYjV-2Fah-2Bw1TH-2Bv4E-2BpHL-2BOQIDypU4V7IhmpAHJp8leL2FczEUmDyyqGBOks-2F-2BRvYh4aArlL9QlNYiiFWHgVd09sQJMJcrm-2FdTNxXPJ91zIRuZrFtY58-2BiDlwfQ4xrjOMwcig6sFzCwack-2BOL2T12s3tZeLJb4iCRQe6uOi-2Fi2cz0biiO2Z49nazCEQIU4KduwIyW9XVkeHySOt_dFJUp77814yNLkq7dpsWkEzxvMJV9snQwTy3GMhPrPANRF0tKgRtVSGnSOpZ9Jcp0nftgnwsUvt8tg9E3FRxN3Pz685TaAU-2BWYOVdBScJmWzGCIV3iBaa8ipzXf-2Fxu4CYRGmJfnZ7L-2BTCOfg9P35LalTELjpohVVuh-2Bd7pkmgzeCmzX9l4Ftkmsm3dotugHcCIOY5tdQseIzWtGuXthkmJEX9unlEfU6s5xiNAaWIII-3D" rel="noopener" style="text-decoration: underline; color: #0000ff;" target="_blank">unsubscribe here</a>.</span><br/>Smart Hotel Web Services, is a trademark of Zaam Technologies and its affiliates.</p>
<p style="text-align: center; line-height: 1.5; word-break: break-word; mso-line-height-alt: 18px; margin: 0;">Zaam Technologies is a registered trademark of Zaam Technologies.</p>
<p style="text-align: center; line-height: 1.5; word-break: break-word; mso-line-height-alt: 18px; margin: 0;"><br/>This message was produced and distributed by Zaam Technologies and its affiliates, 11011 Nairobi 00100 GPO, Nairobi, Kenya.<br/>© 2020, Zaam Technologies or its affiliates. All rights reserved.</p>
<p style="text-align: center; line-height: 1.5; word-break: break-word; mso-line-height-alt: 18px; margin: 0;">Read our <span style="color: #0000ff;"><a data-mt-detrack-attachment-inspected="true" data-mt-detrack-inspected="true" data-saferedirecturl="https://www.google.com/url?q=https://u19199500.ct.sendgrid.net/ls/click?upn%3DFKN29UhQ0n-2BlWVxRpZH00Vq4fSA1xYzYLTi9ro1aOC6-2Fidrw2FUbu3KBeztPqSAQfkU1nMjqbRJA2L-2F1-2Fl429aTIzTluSGOaZ5fkXx3ZuVLNYPaXmc15BoT5Qz5uuj-2FDz-2Fb5X-2FhIAq1WHIVMnidN1OOhEollAOCWW1CutxYvaVeMeiXE-2FmJBg1t5dkWTkD-2FN2CxYp-2BJs0JB8wrfji5o521oLoNr-2FAiJ391q-2B8zbjm4T7ksLcJUoO-2B3ZPAFevn5PgDaadgT4XW3qFNl25gUp98vn96VjkSeyKgZfI2M2Z9cycj2Mo5qggPs-2BVs4Pe95lxeLVb8UcugCYWCBq-2Fck4VyenxIv4dRHtGWfK80N1dCf3fkePxjO-2FSVqYBs9R4rqeuUbhh7T3vGKYqXeIxYamHzmQbhu1HWC8Q6qlSy2Bi5QtjSHxDjB4a6gmeY2wdtOSV35fhaXzU7dA-2B-2BsHPPusbSSkQzN2UrhtfigMnThP8rB4CHl8Gkgs-2BTlCTiCdrFN0VvW-w_dFJUp77814yNLkq7dpsWkEzxvMJV9snQwTy3GMhPrPANRF0tKgRtVSGnSOpZ9Jcp0nftgnwsUvt8tg9E3FRxN1R0oumXky-2BaFbOP7qIg-2BH5IkdCXSEbUQ36IRKOO88V9JpMK2BknMO7Yt4VXGt4T2Oj6-2BCFw-2F5TieZ8zx33zD8LCgL6uXZYfMNJnQWDoXseR71MoPcJeCr4T9P7H60or3NbN6AYxWw3LsvlRDZ-2FtNuo-3D&amp;source=gmail&amp;ust=1608829593430000&amp;usg=AFQjCNGXDv2o5r5pFTW5j4f7ZAgzZOwlGw" href="https://u19199500.ct.sendgrid.net/ls/click?upn=FKN29UhQ0n-2BlWVxRpZH00Vq4fSA1xYzYLTi9ro1aOC6-2Fidrw2FUbu3KBeztPqSAQfkU1nMjqbRJA2L-2F1-2Fl429aTIzTluSGOaZ5fkXx3ZuVLNYPaXmc15BoT5Qz5uuj-2FDz-2Fb5X-2FhIAq1WHIVMnidN1OOhEollAOCWW1CutxYvaVeMeiXE-2FmJBg1t5dkWTkD-2FN2CxYp-2BJs0JB8wrfji5o521oLoNr-2FAiJ391q-2B8zbjm4T7ksLcJUoO-2B3ZPAFevn5PgDaadgT4XW3qFNl25gUp98vn96VjkSeyKgZfI2M2Z9cycj2Mo5qggPs-2BVs4Pe95lxeLVb8UcugCYWCBq-2Fck4VyenxIv4dRHtGWfK80N1dCf3fkePxjO-2FSVqYBs9R4rqeuUbhh7T3vGKYqXeIxYamHzmQbhu1HWC8Q6qlSy2Bi5QtjSHxDjB4a6gmeY2wdtOSV35fhaXzU7dA-2B-2BsHPPusbSSkQzN2UrhtfigMnThP8rB4CHl8Gkgs-2BTlCTiCdrFN0VvW-w_dFJUp77814yNLkq7dpsWkEzxvMJV9snQwTy3GMhPrPANRF0tKgRtVSGnSOpZ9Jcp0nftgnwsUvt8tg9E3FRxN1R0oumXky-2BaFbOP7qIg-2BH5IkdCXSEbUQ36IRKOO88V9JpMK2BknMO7Yt4VXGt4T2Oj6-2BCFw-2F5TieZ8zx33zD8LCgL6uXZYfMNJnQWDoXseR71MoPcJeCr4T9P7H60or3NbN6AYxWw3LsvlRDZ-2FtNuo-3D" rel="noopener" style="text-decoration: underline; color: #0000ff;" target="_blank">Privacy Policy</a></span></p>
</div>
</div>
<!--[if mso]></td></tr></table><![endif]-->
<table cellpadding="0" cellspacing="0" class="social_icons" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td style="word-break: break-word; vertical-align: top; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
<table align="center" cellpadding="0" cellspacing="0" class="social_table" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-tspace: 0; mso-table-rspace: 0; mso-table-bspace: 0; mso-table-lspace: 0;" valign="top">
<tbody>
  <tr align="center" style="vertical-align: top; display: inline-block; text-align: center;" valign="top">
  <td style="word-break: break-word; vertical-align: top; padding-bottom: 5px; padding-right: 15px; padding-left: 0;" valign="top"><a href="https://www.facebook.com/" target="_blank"><img alt="Facebook" height="32" src="https://res.cloudinary.com/shamirjamal/image/upload/v1609432486/emailbucket/facebook2x_icqsjo.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;" title="Facebook" width="32"/></a></td>
  <td style="word-break: break-word; vertical-align: top; padding-bottom: 5px; padding-right: 15px; padding-left: 0;" valign="top"><a href="https://twitter.com/" target="_blank"><img alt="Twitter" height="32" src="https://res.cloudinary.com/shamirjamal/image/upload/v1609432487/emailbucket/twitter2x_p8seny.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;" title="Twitter" width="32"/></a></td>
  <td style="word-break: break-word; vertical-align: top; padding-bottom: 5px; padding-right: 15px; padding-left: 0;" valign="top"><a href="https://plus.google.com/" target="_blank"><img alt="Google+" height="32" src="https://res.cloudinary.com/shamirjamal/image/upload/v1609432486/emailbucket/googleplus2x_j84shk.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;" title="Google+" width="32"/></a></td>
  <td style="word-break: break-word; vertical-align: top; padding-bottom: 5px; padding-right: 15px; padding-left: 0;" valign="top"><a href="https://instagram.com/" target="_blank"><img alt="Instagram" height="32" src="https://res.cloudinary.com/shamirjamal/image/upload/v1609432486/emailbucket/instagram2x_chzkgu.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;" title="Instagram" width="32"/></a></td>
  <td style="word-break: break-word; vertical-align: top; padding-bottom: 5px; padding-right: 15px; padding-left: 0;" valign="top"><a href="https://www.linkedin.com/" target="_blank"><img alt="LinkedIn" height="32" src="https://res.cloudinary.com/shamirjamal/image/upload/v1609432487/emailbucket/linkedin2x_jl1chs.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;" title="LinkedIn" width="32"/></a></td>
  <td style="word-break: break-word; vertical-align: top; padding-bottom: 5px; padding-right: 15px; padding-left: 0;" valign="top"><a href="https://www.youtube.com/" target="_blank"><img alt="YouTube" height="32" src="https://res.cloudinary.com/shamirjamal/image/upload/v1609432487/emailbucket/youtube2x_jotbfe.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;" title="YouTube" width="32"/></a></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
</td>
</tr>
</tbody>
</table>
<!--[if (IE)]></div><![endif]-->
</body>
</html>
`};
module.exports = { send_otp, send_password_reset_code, send_welcome_email, transporter };
