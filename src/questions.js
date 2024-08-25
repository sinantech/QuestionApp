import borderlands from "../images/borderlands.jpeg"
import callofduty from "../images/callofduty.jpeg"
import cthulhu from "../images/cthulhu.jpeg"
import diablo from "../images/diablo.jpeg"
import ferrari from "../images/ferrari.jpeg"
import lovecraft from "../images/lovecraft.jpeg"
import manager from "../images/manager.jpeg"
import needforspeed from "../images/needforspeed.jpeg"
import sims from "../images/sims.jpeg"
import warcraft from "../images/warcraft.jpeg"


const questions = [
    {
        question : "İlk Borderlands oyunu kaç senesinde piyasaya sürülmüştür?",
        options : ["2012","2009","2011","2008"],
        answer : "2009",
        media : borderlands,
    },
    {
        question : "Call Of Duty serisinin toplamda kaç tane oyunu vardır?",
        options : ["16","23","17","24"],
        answer : "24",
        media : callofduty,
    },
    {
        question : "Call Of Cthulhu oyununun geçtiği şehir neresidir?",
        options : ["Innsmouth","R'lyeh","Pandora","Mustafar"],
        answer : "Innsmouth",
        media : cthulhu,
    },
    {
        question : "Diablo'da aşağıdaki classlardan hangisi yoktur?",
        options : ["Necromancer","Rogue","Monk","Sorcerer"],
        answer : "Monk",
        media : diablo,
    },
    {
        question : "Aşağıdaki sürücülerden hangisi Ferrari pilotu olmamıştır?",
        options : ["Schumacher","Leclerc","Hakkinen","Vettel"],
        answer : "Hakkinen",
        media : ferrari,
    },
    {
        question : "Lovecraft hangi yıl ölmüştür?",
        options : ["1940","1937","1938","1939"],
        answer : "1937",
        media : lovecraft,
    },
    {
        question : "Football Manager oyununun yapımıcısı kimdir?",
        options : ["Sports Interactive","Tyerarch","Gearbox Software","Activision"],
        answer : "Sports Interactive",
        media : manager,
    },
    {
        question : "Need for speed oyunu ilk hangi yıl piyasaya sürülmüştür?",
        options : ["1994","1995","1996","1997"],
        answer : "1994",
        media : needforspeed,
    },
    {
        question : "Sims oyunu hangi platformun oyunudur?",
        options : ["Xbox","PC","PS","Nintendo"],
        answer : "PC",
        media : sims,
    },
    {
        question : "World Of Warcraft oyunundaki en güçlü class hangisidir?",
        options : ["Hunter","Mage","Shaman","Death Knight"],
        answer : "Death Knight",
        media : warcraft,
    },
]
export default questions;