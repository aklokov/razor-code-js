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
    SubgroupCondition,
    BraceWait,
    ElseWait = 15,
    Subgroup,
    MultilineSubgroup,
    Comment
};

export default StateType;
