enum StateType {
    Final = 1,
    Root,
    Config,
    ImplicitExpression,
    RoundParenthesis = 5,
    CurlyBrace,
    SquareBracket,
    AngleBracket,
    QuoteBracket,
    ApostropheBracket = 10,
    ExplicitExpression,
    Injection,
    ForEachCondition,
    BraceWait,
    Subgroup = 15,
    MultilineSubgroup
};

export default StateType;
